import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';
import { storageFor } from 'ember-local-storage';
import FileSaver from 'file-saver';

const Item = EmberObject.extend({}).reopenClass({
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

  deleteItem(store, modelName, id) {
    const record = store.peekRecord(modelName, id);
    store.deleteRecord(record);
  },

  changeState(store, modelName, state) {
    store.peekAll(modelName).forEach(el => {
      el.set('state', state);
    })
  },

  activeItem(store, modelName) {
    const records = store.peekAll(modelName);
    let state = false;
    records.forEach(el => {
      if(el.state) state = true;
    });
    return state;
  },

  getNumberOfItems(items) {
    return items.length;
  },

  getStatistics(groups, subgroups, tasks) {
    return {
      groups: Group.getNumberOfItems(groups),
      subgroups: Subgroup.getNumberOfItems(subgroups),
      tasks: Task.getNumberOfItems(tasks),
    };
  },

  getArrayOfItems(store, exportCompletedTasks) {
    const ws_data = [];
    const groups = store.peekAll('group');
    groups.forEach(gr => {
      const subgroups = gr.subgroups;
      ws_data.push([gr.id, gr.name, gr.state]);
      subgroups.forEach(sg => {
        const tasks = sg.tasks;
        ws_data.push([sg.id, sg.name, sg.state]);
        tasks.forEach(ts => {
          if(exportCompletedTasks) {
            ws_data.push([ts.id, ts.task, ts.state]);
          }else {
            if(!ts.state) {
              ws_data.push([ts.id, ts.task, ts.state]);
            }
          }
        })
      })
    });
    return ws_data;
  },

  deserializeItems(store, data, self) {
    if(!Array.isArray(data)) return;
    for(let el of data) {
      const [itemId, itemName, itemState] = el;
      if(itemId[0] == 'g') {
        const group = store.peekRecord('group', itemId);
        if (!group) {
          const groupObject = Group.createItem(itemId, itemName, false);
          const group = Group.saveItem(store, 'group', groupObject);
        }
        self.saveLocation(itemId, null);
      }else if (itemId.split('_')[0] == 'sg') {
        const subgroup = store.peekRecord('subgroup', itemId);
        if (!subgroup) {
          const group = self.get('location.group.obj');
          const subgroupObject = Subgroup.createItem(itemId, itemName, false, {
            group,
          });
          const subgroup = Subgroup.saveItem(store, 'subgroup', subgroupObject);
        }
        self.saveLocation(undefined, itemId);
      }else if (itemId[0] == 't') {
        const task = store.peekRecord('task', itemId);
        if(!task) {
          const subgroup = self.get('location.subgroup.obj');
          const taskObject = Task.createItem(itemId, itemName, itemState, {
            subgroup,
          });
          Task.saveItem(store, 'task', taskObject);
        }
        self.set('location.task.key', itemId);
      }
    }
  }
})

const Group = Item.extend({}).reopenClass({
  scrollDown() {
    const groupsList = document.querySelector('.groups-list-block');
    groupsList.scrollTo({
      top: groupsList.scrollHeight,
      behavior: 'smooth'
    });
  }
})

const Subgroup = Group.extend({}).reopenClass({
  scrollRight() {
    const subgroupsList = document.querySelector('.scrollmenu');
    subgroupsList.scrollTo({
      left: subgroupsList.scrollWidth,
      behavior: 'smooth'
    })
  }
})

const Task = Item.extend({}).reopenClass({
  createItem(id, task, state, params) {
    const item = {
      id,
      task,
      state,
    };
    Object.assign(item, params);
    return item;
  },

  getNumberOfItems(items) {
    const statistics = EmberObject.create({
      completed: 0,
      active: 0,
    }).reopen({
      all: computed('completed', 'active', function() {
        return this.completed + this.active;
      })
    });

    items.forEach(el => {
      if(el.state) {
        statistics.incrementProperty('completed');
      }else {
        statistics.incrementProperty('active');
      }
    });
    return statistics;
  },
  
  scrollDown() {
    const groupsList = document.querySelector('.task-list-block-scroll');
    groupsList.scrollTo({
      top: groupsList.scrollHeight,
      behavior: 'smooth'
    });
  }
})

function generateId() {
  return `${Math.floor(Math.random() * 10**10)}`;
}

export default Controller.extend({
  init() {
    this._super(...arguments);
    const store = this.get('store');
    const storage = this.get('stats.groups');
    const groupId = 'g_00000000001';
    const subgroupId = 'sg_0000000001';
    const group = Group.createItem(groupId, 'main group', true, { main: true });
    const groupModel = Group.saveItem(store, 'group', group);
    const subgroup = Subgroup.createItem(subgroupId, 'main subgroup', true, {
      main: true,
      group: groupModel
    });
    Subgroup.saveItem(store, 'subgroup', subgroup);
    Item.deserializeItems(store, storage, this);
    Group.changeState(store, 'group', false);
    this.saveLocation(groupId, subgroupId);
    this.updateStatistics();
  },
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
  modal: {
    open: false,
    type: null,
  },
  exportCompletedTasks: true,
  group: '',
  subgroup: '',
  task: '',
  actions: {
    addGroup(e) {
      const store = this.get('store');
      if (e.keyCode == 13) {
        const _id = `g_${generateId()}`;
        Group.changeState(store, 'group', false);
        this.clearLocationSubgroup();
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
        Subgroup.changeState(store, 'subgroup', false)
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
      const currentSubgroupId = this.get('location.subgroup.key');
      const currentSubgroup = store.peekRecord('subgroup', currentSubgroupId);
      const task = Task.createItem(_id, this.task, false, {
        subgroup: currentSubgroup
      });
      Task.saveItem(store, 'task', task);
      this.saveList();
      this.set('location.task.key', _id);
      this.updateStatistics();
      setTimeout(() => {
        Task.scrollDown();
      }, 10)
    },

    deleteCompletedTask() {
      if(confirm('Delete completed tasks?')) {
        const store = this.get('store');
        const subgroupId = this.get('location.subgroup.key');
        const subgroup = store.peekRecord('subgroup', subgroupId);
        subgroup.get('tasks').forEach(el => {
          if(el.state) {
            store.deleteRecord(el);
            this.set('location.task.key', el.id);
          }
        });
      
        this.saveList();
        this.updateStatistics();
      }
    },

    clearLocalStorage() {
      this.get('stats').clear();
    },

    deleteGroup(groupId, event) {
      event.stopPropagation();
      const store = this.get('store');
      const groups = store.peekAll('group');
      const currentGroup = store.peekRecord('group', groupId);
      const groupIndex = groups.indexOf(currentGroup);
      if (confirm('Delete this group?')) {
        Group.deleteItem(store, 'group', groupId);
        console.log(Group.activeItem(store, 'group'));
        if (!Group.activeItem(store, 'group')) {
          const group = groups.objectAt(groupIndex - 1);
          const subgroups = group.get('subgroups');
          const subgroup = subgroups.get('firstObject');
          const groupId = group.get('id');
          const subgroupId = subgroup ? subgroup.get('id') : null;
          Group.changeState(store, 'group');
          Subgroup.changeState(store, 'subgroup');
          this.saveLocation(groupId, subgroupId);
        }
        this.saveList();
        this.updateStatistics();
      }
    },

    deleteSubgroup(subgroupId) {
      if (confirm('Delete this subgroup?')) {
        const store = this.get('store');
        const subgroups = this.get('subgroups');
        const subgroup = store.peekRecord('subgroup', subgroupId);
        const subgroupIndex = subgroups.indexOf(subgroup);
        Subgroup.deleteItem(store, 'subgroup', subgroupId);
        if (!Subgroup.activeItem(store, 'subgroup') && subgroups.length - 1) {
          if(subgroups.get('firstObject').get('id') === subgroupId) {
            this.saveLocation(undefined, subgroups.objectAt(subgroupIndex + 1).get('id'));
          }else {
            this.saveLocation(undefined, subgroups.objectAt(subgroupIndex - 1).get('id'));
          }
        }else {
          this.clearLocationSubgroup();
        }
        this.saveList();
        this.updateStatistics();
      }
    },

    deleteTask(taskId) {
      if(confirm('Delete this task?')) {
        const store = this.get('store');
        Task.deleteItem(store, 'task', taskId);
        this.set('location.task.key', null);
        this.set('location.task.key', taskId);
        this.saveList();
        this.updateStatistics();
      }
    },

    taskStateToggle(taskId) {
      const store = this.get('store');
      const taskRecord = store.peekRecord('task', taskId);
      if(taskRecord.get('state')) {
        taskRecord.set('state', false)
      }else {
        taskRecord.set('state', true)
      };
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

    saveLocation(groupId) {
      const store = this.get('store');
      const subgroups = store.peekRecord('group', groupId).subgroups;
      const subgroup = subgroups.get('firstObject');
      const subgroupId = subgroup ? subgroup.get('id') : null;
      Group.changeState(store, 'group', false);
      Subgroup.changeState(store, 'subgroup', false);
      this.saveLocation(groupId, subgroupId);
      this.updateStatistics();
    },

    saveLocationForSubgroup(subgroupId) {
      const store = this.get('store');
      Subgroup.changeState(store, 'subgroup', false);
      this.saveLocation(undefined, subgroupId);
      this.updateStatistics();
    },

    toggleModal(type) {
      if(this.get('modal.open')) {
        this.set('modal.open', false);
        this.set('type', null);
      }else {
        this.set('modal.open', true);
        this.set('modal.type', type);
      }
      console.log(this.modal.open);
    },

    createCSVfile() {
      const store = this.get('store');
      var wb = XLSX.utils.book_new();
      wb.Props = {
        Title: "Todo app",
        Subject: "Tasks",
        Author: "Todo",
        CreatedDate: new Date()
      };
      wb.SheetNames.push("Tasks Sheet");
      var ws_data = Item.getArrayOfItems(store, this.exportCompletedTasks);
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
      const store = this.get('store');
      var wb = XLSX.utils.book_new();
      wb.Props = {
        Title: "Todo app",
        Subject: "Tasks",
        Author: "Todo",
        CreatedDate: new Date()
      };
      wb.SheetNames.push("Tasks Sheet");
      var ws_data = Item.getArrayOfItems(store, this.exportCompletedTasks);
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
      const store = this.get('store');
      this.set('err.fileType.active', false);
      reader.onload = function(e) {
        let jsonData;
        const data = XLSX.read(e.target.result, {
          type: 'binary'
        });
        if(file.name.slice(-3) == 'csv') {
          jsonData = XLSX.utils.sheet_to_json(data.Sheets['Sheet1'], {
            header: 1,
            raw: true
          });
        }else if (file.name.slice(-4) == 'xlsx') {
          jsonData = XLSX.utils.sheet_to_json(data.Sheets['Tasks Sheet'], {
            header: 1,
            raw: true
          });
        }else {
          self.set('err.fileType.active', true);
        }
        if (jsonData) {
          Item.deserializeItems(store, jsonData, self);
          Group.changeState(store, 'group', false);
          self.saveLocation('g_00000000001', 'sg_0000000001');
          self.set('location.task.key', null);
        }
        self.saveList();
        self.updateStatistics();
      };
      reader.readAsBinaryString(file);
    },

    toggleMenu() {
      if(this.menu) {
        this.set('menu', false);
      }else {
        this.set('menu', true);
      }
    },

    log() {
      const store = this.get('store');
      const groups = store.peekAll('group').map(el => {
        return el.id;
      });
      const subgroups = store.peekAll('subgroup').map(el => {
        return el.id;
      });
      const tasks = store.peekAll('task').map(el => {
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
    const store = this.get('store');
    this.set('stats.groups', Item.getArrayOfItems(store, true));
  },

  saveLocation(groupId, subgroupId) {
    const store = this.get('store');
    if(groupId) {
      const currentGroup = store.peekRecord('group', groupId);
      this.set('location.group.key', groupId);
      this.set('location.group.obj', currentGroup);
      currentGroup.set('state', true);
    }
    if(subgroupId || subgroupId === null) {
      const currentSubgroup = subgroupId ? store.peekRecord('subgroup', subgroupId) : null;
      this.set('location.subgroup.key', subgroupId);
      this.set('location.subgroup.obj', currentSubgroup);
      if(subgroupId) currentSubgroup.set('state', true);
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
    const statistics = Item.getStatistics(this.groups, this.subgroups, this.tasks);
    this.set('location.group.groups', statistics.groups);
    this.set('location.group.subgroups', statistics.subgroups);
    this.set('location.subgroup.tasks', statistics.tasks.all);
    this.set('location.subgroup.completed', statistics.tasks.completed);
    this.set('location.subgroup.active', statistics.tasks.active);
  }
});
