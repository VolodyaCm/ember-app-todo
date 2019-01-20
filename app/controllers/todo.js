import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';
import { storageFor } from 'ember-local-storage';
import FileSaver from 'file-saver';

const Group = EmberObject.extend({}).reopenClass({
  createItem(id, name, state, params) {
    const item = {
      id,
      name,
      state,
    };
    Object.assign(item, params);
    return item;
  },

  saveItem(store, modelName, item) {
    return store.createRecord(modelName, item);
  },

  createGroup(key, group, active = false, param) {
    if(list[key]) return;
    const g_obj = Group.create({
      group,
      active,
      subgroups: EmberObject.extend({}).create({})
    });
    Object.assign(g_obj, param);
    list.set(key, g_obj);
  },

  delete(id) {
    list.set(id, undefined);
    delete list[id];
  },

  scrollDown() {
    const groupsList = document.querySelector('.groups-list-block');
    groupsList.scrollTo({
      top: groupsList.scrollHeight,
      behavior: 'smooth'
    });
  }
})

const Subgroup = Group.extend({}).reopenClass({
  createSubgroup(key, subgroup, active = false, subgroups, param) {
    if(subgroups[key]) return;
    const sg_obj = Subgroup.create({
      subgroup,
      active,
      tasks: EmberObject.extend({}).create({})
    });
    Object.assign(sg_obj, param);
    subgroups.set(key, sg_obj);
  },

  delete(id, subgroups) {
    subgroups.set(id, undefined);
    delete subgroups[id];
  },

  scrollRight() {
    const subgroupsList = document.querySelector('.scrollmenu');
    subgroupsList.scrollTo({
      left: subgroupsList.scrollWidth,
      behavior: 'smooth'
    })
  }
})

const Task = Group.extend({}).reopenClass({
  createItem(id, task, state, params) {
    const item = {
      id,
      task,
      state,
    };
    Object.assign(item, params);
    return item;
  },

  createTask(key, task, completed, tasks) {
    if(tasks[key]) return;
    tasks.set(key, Task.create({
      task,
      completed,
    }));
  },

  delete(id, tasks) {
    tasks.set(id, undefined);
    delete tasks[id];
  },
  
  scrollDown() {
    const groupsList = document.querySelector('.task-list-block-scroll');
    groupsList.scrollTo({
      top: groupsList.scrollHeight,
      behavior: 'smooth'
    });
  }
})

const List = EmberObject.extend({
  activeGroup() {
    const groups = Object.keys(list);
    groups.forEach(el => {
      return list[el].active ? true : false;
    })
  },
  
  activeSubgroup(subgroups) {
    const keys = Object.keys(subgroups);
    return keys.forEach(el => {
      return subgroups[el].active ? true : false;
    })
  },

  deactivationGroup() {
    const keys = Object.keys(list);
    keys.forEach(el => {
      this.get(el).set('active', false);
    })
  },

  deactivationSubgroup(subgroups) {
    const keys = Object.keys(subgroups);
    keys.forEach(el => {
      subgroups.get(el).set('active', false);
    })
  },

  getSheet(exportCompletedTasks) {
    const ws_data = [];
    const groups = Object.keys(this);
    for (let gr of groups) {
      ws_data.push([gr, this[gr].group, this[gr].active]);
      for (let sg of Object.keys(this[gr].subgroups)) {
        ws_data.push([sg, this[gr].subgroups[sg].subgroup, this[gr].subgroups[sg].active]);
        for (let ts of Object.keys(this[gr].subgroups[sg].tasks)) {
          if (exportCompletedTasks) {
            ws_data.push([ts, this[gr].subgroups[sg].tasks[ts].task, this[gr].subgroups[sg].tasks[ts].completed]);
          } else {
            if (!this[gr].subgroups[sg].tasks[ts].completed) {
              ws_data.push([ts, this[gr].subgroups[sg].tasks[ts].task, this[gr].subgroups[sg].tasks[ts].completed]);
            }
          }
        }
      }
    }
    return ws_data;
  },

  getNumberOfgroups() {
    return Object.keys(list).length;
  },

  getNumberOfSubgroups(subgroups) {
    return Object.keys(subgroups).length;
  },

  getNumberOftasks(tasks={}) {
    const keys = Object.keys(tasks);
    const statistics = EmberObject.create({
      completed: 0,
      active: 0,
    }).reopen({
      all: computed('completed', 'active', function() {
        return this.completed + this.active;
      })
    });
    keys.forEach(el => {
      if (tasks[el].completed) {
        statistics.incrementProperty('completed');
      } else {
        statistics.incrementProperty('active');
      }
    });
    return statistics;
  },

  getStatistics(subgroups, tasks) {
    return {
      groups: this.getNumberOfgroups(),
      subgroups: this.getNumberOfSubgroups(subgroups),
      tasks: this.getNumberOftasks(tasks),
    };
  },

  loadGroups(storage) {
    const keys = Object.keys(storage);
    keys.forEach(el => {
      const g_obj = storage[el];
      const params = {};
      if (g_obj.main) {
        params.main = g_obj.main,
        params.active = true
      };
      Group.createGroup(el, g_obj.group, false, params);
    })
  },

  loadSubgroups(storage) {
    const g_keys = Object.keys(storage);
    g_keys.forEach(el => {
      const subgroups = this[el].subgroups;
      const sg_keys = Object.keys(storage[el].subgroups);
      sg_keys.forEach(sg => {
        const sg_obj = storage[el].subgroups[sg];
        const params = {};
        if (sg_obj.main) {
          params.main = sg_obj.main;
          params.active = true;
        };
        Subgroup.createSubgroup(sg, sg_obj.subgroup, false, subgroups, params)
      })
    })
  },

  loadTasks(storage) {
    const g_keys = Object.keys(storage);
    g_keys.forEach(el => {
      const listSubgroups = this[el].subgroups;
      const storageSubgroups = storage[el].subgroups;
      const sg_keys = Object.keys(storageSubgroups);
      sg_keys.forEach(sg => {
        const listTasks = listSubgroups[sg].tasks;
        const storageTasks = storageSubgroups[sg].tasks;
        const t_keys = Object.keys(storageSubgroups[sg].tasks);
        t_keys.forEach(ts => {
          const t_obj = storageTasks[ts];
          Task.createTask(ts, t_obj.task, t_obj.completed, listTasks);
        })
      })
    })
  }
});

const list = List.create({});

function generateId() {
  return `${Math.floor(Math.random() * 10**10)}`;
}

export default Controller.extend({
  init() {
    this._super(...arguments);
    const store = this.get('store');
    const storage = this.get('stats.groups');
    const g_id = 'g_00000000001';
    const sg_id = 'sg_0000000001';
    const group = Group.createItem(g_id, 'main group', true, { main: true });
    const groupModel = Group.saveItem(store, 'group', group);
    const subgroup = Subgroup.createItem(sg_id, 'main subgroup', true, {
      main: true,
      group: groupModel
    });
    Subgroup.saveItem(store, 'subgroup', subgroup);
  },
  list: list,
  groups: computed('location.{group.key,subgroup.key}', function() {
    const store = this.get('store');
    const groups = store.peekAll('group');
    return groups;
  }),
  subgroups: computed('location.{group.key,subgroup.key}', function() {
    const store = this.get('store');
    const subgroups = store.peekAll('subgroup');
    const currentGroupId = this.get('location.group.key');
    const subgroupsOfgroup = subgroups.filter(subgroup => {
      return subgroup.get('group.id') === currentGroupId;
    });
    return subgroupsOfgroup;
  }),
  tasks: computed('location.{group.key,subgroup.key,task.key}', function() {
    const store = this.get('store');
    const tasks = store.peekAll('task');
    const currentGroupId = this.get('location.group.key');
    const currentSubgroupId = this.get('location.subgroup.key');
    const tasksOfsubgroups = tasks.filter(task => {
      return task.get('subgroup.id') === currentSubgroupId && task.get('subgroup.group.id') === currentGroupId;
    });
    return tasksOfsubgroups;
  }),
  stats: storageFor('stats'),
  location: {
    group: {
      key: 'g_00000000001',
      obj: null,
      groups: null,
      subgroups: null,
    },
    subgroup: {
      key: 'sg_0000000001',
      obj: null,
      tasks: null,
      completed: null,
      active: null,
    },
    task: {
      key: null,
    }
  },
  err: {
    fileType: {
      active: false,
    }
  },
  menu: false,
  csvFile: '',
  isShowingExportModal: false,
  isShowingImportModal: false,
  exportCompletedTasks: true,
  group: '',
  subgroup: '',
  task: '',
  actions: {
    addGroup(e) {
      const store = this.get('store');
      if (e.keyCode == 13) {
        const _id = `g_${generateId()}`;
        list.deactivationGroup();
        this.clearLocationSubgroup();
        Group.createGroup(_id, this.group, true);
        const item = Group.createItem(_id, this.group, true);
        Group.saveItem(store, 'group', item);
        this.saveLocation(_id);
        this.saveList();
        this.updateStatistics();
        setTimeout(() => {
          Group.scrollDown();
        }, 10)
      }
    },

    addSubgroup(e) {
      const store = this.get('store');
      if (e.keyCode == 13) {
        const _id = `sg_${generateId()}`;
        list.deactivationSubgroup(this.subgroups);
        Subgroup.createSubgroup(_id, this.subgroup, true, this.subgroups);
        const currentGroupId = this.get('location.group.key');
        const currentGroup = store.peekRecord('group', currentGroupId);
        const subgroup = Subgroup.createItem(_id, this.subgroup, true, {
          group: currentGroup
        });
        Subgroup.saveItem(store, 'subgroup', subgroup);
        this.saveLocation(undefined, _id);
        this.saveList();
        this.updateStatistics();
        setTimeout(() => {
          Subgroup.scrollRight();
        }, 10)
      }
    },

    addTask() {
      const store = this.get('store');
      const _id = `t_${generateId()}`;
      Task.createTask(_id, this.task, false, this.tasks);
      const currentSubgroupId = this.get('location.subgroup.key');
      const currentSubgroup = store.peekRecord('subgroup', currentSubgroupId);
      const task = Task.createItem(_id, this.task, false, {
        subgroup: currentSubgroup
      });
      Task.saveItem(store, 'task', task);
      this.saveList();
      this.updateStatistics();
      this.set('location.task.key', _id);
      setTimeout(() => {
        Task.scrollDown();
      }, 10)
    },

    changeId() {
      this.set('id', this.id - 1);
    },

    deleteCompletedTask() {
      if (confirm(`Delete tasks?`)) {
        Object.keys(this.tasks).forEach(el => {
          if (this.tasks[el].completed) {
            Task.delete(el, this.tasks);
          }
        });
        this.saveList();
        this.updateStatistics();
      }
    },

    clearLocalStorage() {
      this.get('stats').clear();
    },

    deleteGroup(id, event) {
      event.stopPropagation();
      const g_index = Object.keys(list).indexOf(id);
      if (confirm('Delete this group?')) {
        Group.delete(id);
        if (!list.activeGroup()) {
          const g_id = Object.keys(list)[g_index - 1];
          const sg_id = Object.keys(list[g_id].subgroups)[0];
          this.clearLocationGroup();
          this.clearLocationSubgroup();
          this.saveLocation(g_id, sg_id);
        }
        this.saveList();
        this.updateStatistics();
      }
    },

    deleteSubgroup(id) {
      if (confirm('Delete this subgroup?')) {
        const sg_keys = Object.keys(this.subgroups); 
        const sg_index = sg_keys.indexOf(id);
        Subgroup.delete(id, this.subgroups);
        if (!list.activeSubgroup(this.subgroups) && Object.keys(this.subgroups).length) {
          if(sg_keys[0] === id) {
            this.saveLocation(undefined, sg_keys[sg_index + 1]);
            this.subgroups.get(this.location.subgroup.key).set('active', true);
          }else {
            this.saveLocation(undefined, sg_keys[sg_index - 1]);
            this.subgroups.get(this.location.subgroup.key).set('active', true);
          }
        }else {
          this.clearLocationSubgroup();
        }
        this.saveList();
        this.updateStatistics();
      }
    },

    deleteTask(id) {
      if(confirm('Delete this task?')) {
        Task.delete(id, this.tasks);
        this.saveList();
        this.updateStatistics();
      }
    },

    isCompleted(id) {
      if (this.tasks.get(id).get("completed")) {
        this.tasks.get(id).set('completed', false);
      } else {
        this.tasks.get(id).set("completed", true);
      }
      this.saveList();
      this.updateStatistics();
    },

    saveList() {
      this.saveList();
    },

    pressEnter(addtask, e) {
      if (e.keyCode == 13) {
        addtask();
      }
    },

    saveLocation(key) {
      const subgroups = list.get(key).get('subgroups');
      const sg_id = Object.keys(subgroups)[0];
      this.set('location.subgroup.key', null);
      this.saveLocation(key, sg_id);
      list.deactivationGroup();
      list.deactivationSubgroup(this.subgroups);
      list.get(key).set(`active`, true);
      if (list.getNumberOfSubgroups(this.subgroups)) {
        subgroups.get(sg_id).set(`active`, true);
      };
      this.updateStatistics();
    },

    saveLocationForSubgroup(key, value) {
      this.saveLocation(undefined, key);
      Object.keys(list).forEach(el => {
        Object.keys(list[el].subgroups).forEach(sg => {
          list.get(el).get('subgroups').get(sg).set(`active`, false);
        });
      });
      value.set('active', true);
      this.updateStatistics();
    },

    toggleModal() {
      if (this.get('isShowingImportModal')) {
        this.set('err.fileType.active', false);
        this.set('isShowingImportModal', false);
      } else if (this.get('isShowingExportModal')) {
        this.set('isShowingExportModal', false);
      }
    },

    openExportModal() {
      this.set('isShowingExportModal', true);
    },

    openImportModal() {
      this.set('isShowingImportModal', true);
    },

    createCSVfile() {
      var wb = XLSX.utils.book_new();
      wb.Props = {
        Title: "Todo app",
        Subject: "Tasks",
        Author: "Todo",
        CreatedDate: new Date()
      };
      wb.SheetNames.push("Tasks Sheet");
      var ws_data = list.getSheet(this.exportCompletedTasks);
      var ws = XLSX.utils.aoa_to_sheet(ws_data);
      wb.Sheets["Tasks Sheet"] = ws;
      var wbout = XLSX.write(wb, {
        bookType: 'csv',
        type: 'binary'
      });

      function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
      }

      FileSaver.saveAs(new Blob([s2ab(wbout)], {
        type: "application/octet-stream"
      }), 'Tasks.csv');
    },

    createXLSXfile() {
      var wb = XLSX.utils.book_new();
      wb.Props = {
        Title: "Todo app",
        Subject: "Tasks",
        Author: "Todo",
        CreatedDate: new Date()
      };
      wb.SheetNames.push("Tasks Sheet");
      var ws_data = list.getSheet(this.exportCompletedTasks);
      var ws = XLSX.utils.aoa_to_sheet(ws_data);
      wb.Sheets["Tasks Sheet"] = ws;
      var wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        type: 'binary'
      });

      function s2ab(s) {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
      }

      FileSaver.saveAs(new Blob([s2ab(wbout)], {
        type: "application/octet-stream"
      }), 'Tasks.xlsx');
    },

    importTasks() {
      const self = this;
      const file = document.querySelector('.fileInput').files[0];
      const reader = new FileReader();
      this.set('err.fileType.active', false);
      reader.onload = function (e) {

        const data = XLSX.read(e.target.result, {
          type: 'binary'
        });
        let jsonData;

        if (file.name.slice(-3) == 'csv') {
          jsonData = XLSX.utils.sheet_to_json(data.Sheets['Sheet1'], {
            header: 1,
            raw: true
          });
        } else if (file.name.slice(-4) == 'xlsx') {
          jsonData = XLSX.utils.sheet_to_json(data.Sheets['Tasks Sheet'], {
            header: 1,
            raw: true
          });
        } else {
          self.set('err.fileType.active', true);
        }

        if (jsonData) {
          for (let key of jsonData) {
            if (key[0][0] == 'g') {
              if (!list[key[0]]) {
                Group.createGroup(key[0], key[1]);
              }
              self.set('location.group.key', key[0]);
              self.set('stats.groups', list);
            } else if (key[0].split('_')[0] == 'sg') {
              if (!list[self.location.group.key].subgroups[key[0]]) {
                Subgroup.createSubgroup(key[0], key[1], false, self.subgroups);
              }
              self.set('location.subgroup.key', key[0]);
              self.set('stats.groups', list);
            } else if (key[0][0] == 't') {
              if (!list[self.location.group.key].subgroups[self.location.subgroup.key].tasks[key[0]]) {
                Task.createTask(key[0], key[1], key[2], self.tasks);
              }
              self.set('stats.groups', list);
            }
          }
          self.set('location.group.key', Object.keys(list)[0]);
          self.set('location.subgroup.key', Object.keys(list[Object.keys(list)[0]].subgroups)[0]);
        }

        self.updateStatistics();
      };
      reader.readAsBinaryString(file);
    },

    toggleMenu() {
      if (this.menu) {
        this.set('menu', false);
      } else {
        this.set('menu', true);
      }
    },

    log() {
      const groups = this.get('groups').map(el => {
        return el.id;
      });
      const subgroups = this.get('subgroups').map(el => {
        return el.id;
      });
      const tasks = this.get('tasks').map(el => {
        return el.id;
      });
      console.log('LOCATION', this.location);
      console.log('GROUPS', groups);
      console.log('SUBGROUPS', subgroups);
      console.log('TASKS', tasks);
    }
  },
}).reopen({
  saveList() {
    this.set('stats.groups', list);
  },

  saveLocation(group, subgroup) {
    if(group) {
      this.set('location.group.key', group);
      this.set('location.group.obj', list[group]);
      this.set('location.group.obj.active', true);
    }
    if(subgroup || subgroup === null) {
      this.set('location.subgroup.key', subgroup);
      this.set('location.subgroup.obj', list[this.location.group.key].subgroups[subgroup]);
      this.set('location.subgroup.active', true);
    }
  },

  clearLocationGroup() {
    this.set('location.group.key', null),
    this.set('location.group.obj', null);
  },

  clearLocationSubgroup() {
    this.set('location.subgroup.key', null);
    this.set('location.subgroup.obj', null);
  },

  updateStatistics() {
    const statistics = list.getStatistics(this.subgroups, this.tasks);
    this.set('location.group.groups', statistics.groups);
    this.set('location.group.subgroups', statistics.subgroups);
    this.set('location.subgroup.tasks', statistics.tasks.all);
    this.set('location.subgroup.completed', statistics.tasks.completed);
    this.set('location.subgroup.active', statistics.tasks.active);
  }
});
