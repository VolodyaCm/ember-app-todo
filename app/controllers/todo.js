import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject, { computed } from '@ember/object';
import { storageFor } from 'ember-local-storage';
import FileSaver from 'file-saver';

function generateId() {
  return `${Math.floor(Math.random() * 10**10)}`;
}

export default Controller.extend({
  init() {
    this._super(...arguments);
    const store = this.get('store');
    const Group = this.get('Group');
    const Subgroup = this.get('Subgroup');
    const groupId = 'g_00000000001';
    const subgroupId = 'sg_0000000001';
    const group = Group.createItem(groupId, 'main group', true, { main: true });
    const groupRecord = store.createRecord('group', group);
    groupRecord.save().then(() => {
      const subgroup = Subgroup.createItem(subgroupId, 'main subgroup', true, {
        main: true,
        group: groupRecord
      });
      Subgroup.saveItem('subgroup', subgroup);
      this.locationData.saveLocation(groupId, subgroupId);
    })
  },
  Group: service('group'),
  Subgroup: service('subgroup'),
  Task: service('task'),
  ItemsStore: service('items-store'),
  groups: computed('location.{group.key,subgroup.key}', function() {
    const store = this.get('store');
    const groups = store.findAll('group');
    return groups;
  }),
  subgroups: computed('location.{group.key,subgroup.key}', function() {
    const store = this.get('store');
    const currentGroupId = this.get('location.group.key');
    const subgroups = store.query('subgroup', { filter: {
      group: {
        id: currentGroupId,
      }
    }});
    return subgroups;
  }),
  tasks: computed('location.{group.key,subgroup.key,task.key}', function() {
    const store = this.get('store');
    const currentGroupId = this.get('location.group.key');
    const currentSubgroupId = this.get('location.subgroup.key');
    const tasks = store.query('task', {
      filter: {
        subgroup: {
          id: currentSubgroupId,
        }
      }
    })
    return tasks;
  }),
  stats: storageFor('stats'),
  locationData: service('location-data'),
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
      state: null,
      obj: null,
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
      const Group = this.get('Group');
      const ItemsStore = this.get('ItemsStore');
      if (e.keyCode == 13) {
        const _id = `g_${generateId()}`;
        ItemsStore.changeState('group', false);
        this.clearLocationSubgroup();
        const item = Group.createItem(_id, this.group, true);
        Group.saveItem('group', item);
        this.locationData.saveLocation(_id);
        this.saveList();
        this.updateStats();
        setTimeout(() => {
          Group.scrollDown();
        }, 10)
      }
    },

    addSubgroup(e) {
      const store = this.get('store');
      const Subgroup = this.get('Subgroup');
      const ItemsStore = this.get('ItemsStore');
      if (e.keyCode == 13) {
        const _id = `sg_${generateId()}`;
        ItemsStore.changeState('subgroup', false)
        const currentGroupId = this.get('location.group.key');
        const currentGroup = store.peekRecord('group', currentGroupId);
        const subgroup = Subgroup.createItem(_id, this.subgroup, true, {
          group: currentGroup,
        });
        Subgroup.saveItem('subgroup', subgroup);
        this.locationData.saveLocation(undefined, _id);
        this.saveList();
        this.updateStats();
        setTimeout(() => {
          Subgroup.scrollRight();
        }, 10)
      }
    },

    addTask() {
      const store = this.get('store');
      const Task = this.get('Task');
      const ItemsStore = this.get('ItemsStore');
      const _id = `t_${generateId()}`;
      const currentSubgroupId = this.get('location.subgroup.key');
      const currentSubgroup = store.peekRecord('subgroup', currentSubgroupId);
      const task = Task.createItem(_id, this.task, false, {
        subgroup: currentSubgroup
      });
      Task.saveItem('task', task);
      this.saveList();
      this.set('location.task.key', _id);
      this.updateStats();
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
        this.updateStats();
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
        if (!Group.activeItem(store, 'group')) {
          const group = groups.objectAt(groupIndex - 1);
          const subgroups = group.get('subgroups');
          const subgroup = subgroups.get('firstObject');
          const groupId = group.get('id');
          const subgroupId = subgroup ? subgroup.get('id') : null;
          Group.changeState(store, 'group');
          Subgroup.changeState(store, 'subgroup');
          this.locationData.saveLocation(groupId, subgroupId);
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
            this.locationData.saveLocation(undefined, subgroups.objectAt(subgroupIndex + 1).get('id'));
          }else {
            this.locationData.saveLocation(undefined, subgroups.objectAt(subgroupIndex - 1).get('id'));
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
        taskRecord.set('state', false);
        this.set('location.task.obj', taskRecord);
        taskRecord.save();
      }else {
        taskRecord.set('state', true);
        this.set('location.task.state', true);
        this.set('location.task.obj', taskRecord);
        taskRecord.save();
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
      const ItemsStore = this.get('ItemsStore');
      const subgroups = store.peekRecord('group', groupId).subgroups;
      const subgroup = subgroups.get('firstObject');
      const subgroupId = subgroup ? subgroup.get('id') : null;

      ItemsStore.changeState('group', false);
      ItemsStore.changeState('subgroup', false);
      this.locationData.saveLocation(groupId, subgroupId);
      this.updateStats();
    },

    saveLocationForSubgroup(subgroupId) {
      const store = this.get('store');
      const ItemsStore = this.get('ItemsStore');
      ItemsStore.changeState('subgroup', false);
      this.locationData.saveLocation(undefined, subgroupId);
      this.updateStats();
    },

    toggleModal(type) {
      if(this.get('modal.open')) {
        this.set('modal.open', false);
        this.set('type', null);
      }else {
        this.set('modal.open', true);
        this.set('modal.type', type);
      }
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
        return [el.id, el.group];
      });
      const tasks = store.peekAll('task').map(el => {
        return [el.id, el.subgroup];
      });
      console.log('LOCATION', this.location1.location);
      console.log('GROUPS', groups);
      console.log('SUBGROUPS', subgroups);
      console.log('TASKS', tasks);
      console.log(this.get('tasks').length);
      console.log(this.get('tasks').filterBy('state', true))
    }
  },
}).reopen({
  saveList() {
    const store = this.get('store');
    // this.set('stats.groups', Item.getArrayOfItems(store, true));
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

  updateStats() {
    const ItemsStore = this.get('ItemsStore');
    const statistics = ItemsStore.getStats(this.groups, this.subgroups, this.tasks);
    this.set('location.group.groups', statistics.groups);
    this.set('location.group.subgroups', statistics.subgroups);
    this.set('location.subgroup.tasks', statistics.tasks.all);
    this.set('location.subgroup.completed', statistics.tasks.completed);
    this.set('location.subgroup.active', statistics.tasks.active);
  }
});
