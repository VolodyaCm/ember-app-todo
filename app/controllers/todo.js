import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';
import { storageFor } from 'ember-local-storage';
import FileSaver from 'file-saver';

const Group = EmberObject.extend({}).reopenClass({
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
  }
})

const Subgroup = EmberObject.extend({}).reopenClass({
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
  }
})

const Task = EmberObject.extend({
  deleteTask(id, tasks) {
    tasks.set(id, undefined);
    delete tasks[id];
  }
}).reopenClass({
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
  }
})

const List = EmberObject.extend({
  activeSubgroup(subgroups) {
    for (let sg of Object.keys(subgroups)) {
      if (subgroups[sg].active) {
        return true;
      }
    }
    return false;
  },

  activeGroup() {
    const groups = Object.keys(list);
    let group = false;
    for (let gr of groups) {
      if (list[gr].active) {
        group = true;
        break;
      }
    }
    return group;
  },

  deactivationGroup() {
    for (let key of Object.keys(list)) {
      this.get(key).set('active', false);
    }
  },

  deactivationSubgroup(subgroups) {
    for (let key of Object.keys(subgroups)) {
      subgroups.get(key).set('active', false);
    }
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

  getNumberOftasks(tasks) {
    const statistics = {
      completed: 0,
      active: 0,
      all: computed('completed', 'active', function() {
        return this.completed + this.active;
      })
    };
    if(!tasks) return statistics;
    const keys = Object.keys(tasks);
    for (let task of keys) {
      if (tasks[task].completed) {
        statistics.completed += 1;
      } else {
        statistics.active += 1;
      }
    }
    return statistics;
  },

  getStatistics(subgroups, tasks) {
    return {
      groups: this.getNumberOfgroups(),
      subgroups: this.getNumberOfSubgroups(subgroups),
      tasks: this.getNumberOftasks(tasks),
    };
  },
});

const list = List.create({});

function generateId() {
  return `${Math.floor(Math.random() * 10**10)}`;
}

export default Controller.extend({
  init() {
    const localSt = this.get('stats.groups');
    Object.keys(localSt).forEach(el => {
      const g_obj = localSt[el];
      const subgroups = localSt[el].subgroups;
      const params = {};
      if (g_obj.main) {
        params.main = g_obj.main,
          params.active = true
      };
      Group.createGroup(el, g_obj.group, false, params);
      Object.keys(subgroups).forEach(sg => {
        const sg_obj = localSt[el].subgroups[sg];
        const tasks = localSt[el].subgroups[sg].tasks;
        const params = {};
        if (sg_obj.main) {
          params.main = sg_obj.main;
          params.active = true;
        };
        const location = {
          group: {
            key: el
          },
        };
        Subgroup.createSubgroup(sg, sg_obj.subgroup, false, list[el].subgroups, params);
        console.log(list[el].subgroups === this.subgroups);
        Object.keys(tasks).forEach(ts => {
          const t_obj = localSt[el].subgroups[sg].tasks[ts];
          const location = {
            group: {
              key: el
            },
            subgroup: {
              key: sg
            }
          };
          Task.createTask(ts, t_obj.task, t_obj.completed, list[el].subgroups[sg].tasks);
        })
      });
    });

    const g_id = 'g_00000000001';
    const sg_id = 'sg_0000000001';

    Group.createGroup(g_id, 'Main group', true, {
      main: true
    })
    Subgroup.createSubgroup(sg_id, 'Main subgroup', true, this.subgroups, {
      main: true
    })
    this.saveLocation(g_id, sg_id);
    this.updateStatistics();
  },
  list: list,
  subgroups: computed('list', 'location.{group.key,subgroup.key}', function() {
    const g_id = this.location.group.key;
    return this.list.get(g_id).get('subgroups');
  }),
  tasks: computed('list', 'location.{group.key,subgroup.key}', function() {
    const g_id = this.location.group.key;
    const sg_id = this.location.subgroup.key;
    if(sg_id) {
      return this.list.get(g_id).get('subgroups').get(sg_id).get('tasks');
    }
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
  id: 0,
  actions: {
    addGroup(e) {
      if (e.keyCode == 13) {
        const _id = `g_${generateId()}`;
        list.deactivationGroup();
        this.set('location.subgroup.key', null);
        Group.createGroup(_id, this.group, true);
        this.saveLocation(_id);
        this.set('stats.groups', list);
        this.updateStatistics();
      }
    },

    addSubgroup(e) {
      if (e.keyCode == 13) {
        const _id = `sg_${generateId()}`;
        const g_id = this.get('location.group.key');
        Object.keys(list.get(g_id).get('subgroups')).forEach(el => {
          list.get(g_id).get('subgroups').get(el).set('active', false);
        });
        Subgroup.createSubgroup(_id, this.subgroup, true, this.subgroups);
        this.saveLocation(undefined, _id);
        this.set('stats.groups', list);
        this.updateStatistics();
      }
    },

    addTask() {
      const _id = `t_${generateId()}`;
      Task.createTask(_id, this.task, false, this.tasks);
      this.set('stats.groups', list);
      this.updateStatistics();
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
        this.set('stats.groups', list);
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
        this.set('stats.groups', list);
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
        this.set('stats.groups', list);
        this.updateStatistics();
      }
    },

    deleteTask(id) {
      const tasks = list.get(this.location.group.key).get('subgroups').get(this.location.subgroup.key).get('tasks');
      Task.delete(id, tasks);
      this.set('stats.groups', list);
      this.updateStatistics();
    },

    isCompleted(id) {
      const tasks = list.get(this.location.group.key).get('subgroups').get(this.location.subgroup.key).get('tasks');
      if (tasks.get(id).get("completed")) {
        tasks.get(id).set('completed', false);
      } else {
        tasks.get(id).set("completed", true);
      };
      this.set('stats.groups', list);
      this.updateStatistics();
    },

    saveTask() {
      this.set('stats.groups', list);
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
      if (Object.keys(subgroups).length) {
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
      };
    },

    log() {
      console.log('LOCATION', this.location);
      console.log('LIST', this.list);
      console.log('SUBGROUPS', this.get('subgroups'));
      console.log('TASKS', this.get('tasks'));
    }
  },
}).reopen({
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
