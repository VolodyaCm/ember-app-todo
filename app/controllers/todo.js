import Controller from '@ember/controller';
import Ember from 'ember';
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
    const LocationData = this.get('LocationData');
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
      LocationData.saveLocation(groupId, subgroupId);
    });
  },
  Group: service('group'),
  Subgroup: service('subgroup'),
  Task: service('task'),
  ItemsStore: service('items-store'),
  LocationData: service('location-data'),
  location: Ember.computed.alias('LocationData.location'),
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
      const Group = this.get('Group');
      const locationData = this.get('LocationData');
      const itemsStore = this.get('ItemsStore');
      if (e.keyCode == 13) {
        const groupId = `g_${generateId()}`;
        itemsStore.changeState('group', false);
        locationData.clearLocation('subgroup');
        const item = Group.createItem(groupId, this.group, false);
        Group.saveItem('group', item).then((result) => {
          result.set('state', true);
          locationData.saveLocation(groupId);
          locationData.updateStatistics();
          setTimeout(() => Group.scrollDown());
        })
      }
    },

    addSubgroup(e) {
      const store = this.get('store');
      const Subgroup = this.get('Subgroup');
      const itemsStore = this.get('ItemsStore');
      const locationData = this.get('LocationData');
      const location = locationData.location;
      if (e.keyCode == 13) {
        const subgroupId = `sg_${generateId()}`;
        itemsStore.changeState('subgroup', false);
        const groupId = location.group.key;
        const group = store.peekRecord('group', groupId);
        const subgroup = Subgroup.createItem(subgroupId, this.subgroup, false, {
          group,
        });
        Subgroup.saveItem('subgroup', subgroup).then((result) => {
          result.set('state', true);
          locationData.saveLocation(undefined, subgroupId);
          locationData.updateStatistics();
          setTimeout(() => Subgroup.scrollRight());
        })
      }
    },

    addTask() {
      const store = this.get('store');
      const locationData = this.get('LocationData');
      const location = locationData.location;
      const Task = this.get('Task');
      const taskId = `t_${generateId()}`;
      const currentSubgroupId = location.subgroup.key;
      const currentSubgroup = store.peekRecord('subgroup', currentSubgroupId);
      const task = Task.createItem(taskId, this.task, false, {
        subgroup: currentSubgroup
      });
      Task.saveItem('task', task);
      this.set('location.task.key', taskId);
      locationData.updateStatistics();
      setTimeout(() => Task.scrollDown());
    },

    deleteCompletedTask() {
      if(confirm('Delete completed tasks?')) {
        const store = this.get('store');
        const model = this.get('model');
        const Task = this.get('Task');
        const locationData = this.get('LocationData');
        const subgroupId = this.get('location.subgroup.key');
        const subgroup = store.peekRecord('subgroup', subgroupId);
        const tasks = model.tasks;
        tasks.forEach(el => {
          if(el.state) {
            Task.deleteItem('task', el.id);
          }
        });
        locationData.updateStatistics();
      }
    },

    deleteGroup(groupId, event) {
      event.stopPropagation();
      const store = this.get('store');
      const Group = this.get('Group');
      const locationData = this.get('LocationData');
      const itemsStore = this.get('ItemsStore');
      const groups = store.peekAll('group');
      const currentGroup = store.peekRecord('group', groupId);
      const groupIndex = groups.indexOf(currentGroup);
      if (confirm('Delete this group?')) {
        Group.deleteItem('group', groupId).then(() => {
          if (!itemsStore.activeItem('group')) {
            const group = groups.objectAt(groupIndex - 1);
            const subgroups = group.get('subgroups');
            const subgroup = subgroups.get('firstObject');
            const groupId = group.get('id');
            const subgroupId = subgroup ? subgroup.get('id') : null;
            itemsStore.changeState('group');
            itemsStore.changeState('subgroup');
            locationData.saveLocation(groupId, subgroupId);
          }
          locationData.updateStatistics();
        })
      }
    },

    deleteSubgroup(subgroupId) {
      if (confirm('Delete this subgroup?')) {
        const store = this.get('store');
        const model = this.get('model');
        const Subgroup = this.get('Subgroup');
        const locationData = this.get('LocationData');
        const itemsStore = this.get('ItemsStore');
        const subgroup = store.peekRecord('subgroup', subgroupId);
        const subgroupIndex = model.subgroups.indexOf(subgroup);
        Subgroup.deleteItem('subgroup', subgroupId).then(() => {
          if (!itemsStore.activeItem('subgroup') && model.subgroups.length - 1) {
            console.log(model.subgroups.get('firstObject').get('id'), subgroupId);
            if(model.subgroups.get('firstObject').get('id') === subgroupId) {
              locationData.saveLocation(undefined, model.subgroups.objectAt(subgroupIndex + 1).get('id'));
            }else {
              locationData.saveLocation(undefined, model.subgroups.objectAt(subgroupIndex - 1).get('id'));
            }
          }else {
            locationData.clearLocation('subgroup');
          }
          locationData.updateStatistics();
        })
      }
    },

    deleteTask(taskId) {
      if(confirm('Delete this task?')) {
        const store = this.get('store');
        const locationData = this.get('LocationData');
        const Task = this.get('Task');
        
        Task.deleteItem('task', taskId);
        this.set('location.task.key', null);
        this.set('location.task.key', taskId);
        locationData.updateStatistics();
      }
    },

    taskStateToggle(taskId) {
      const store = this.get('store');
      const locationData = this.get('LocationData');
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
      locationData.updateStatistics();
    },

    pressEnter(addtask, e) {
      if (e.keyCode == 13) {
        addtask();
      }
    },

    saveLocation(groupId) {
      const store = this.get('store');
      const LocationData = this.get('LocationData');
      const ItemsStore = this.get('ItemsStore');
      const subgroups = store.peekRecord('group', groupId).subgroups;
      const subgroup = subgroups.get('firstObject');
      const subgroupId = subgroup ? subgroup.get('id') : null;

      ItemsStore.changeState('group', false);
      ItemsStore.changeState('subgroup', false);
      LocationData.saveLocation(groupId, subgroupId);
      LocationData.updateStatistics();
    },

    saveLocationForSubgroup(subgroupId) {
      const store = this.get('store');
      const LocationData = this.get('LocationData');
      const ItemsStore = this.get('ItemsStore');
      ItemsStore.changeState('subgroup', false);
      LocationData.saveLocation(undefined, subgroupId);
      LocationData.updateStatistics();
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
      console.log('LOCATION', this.get('LocationData').location);
      console.log('GROUPS', groups, groups.length);
      console.log('SUBGROUPS', subgroups);
      console.log('TASKS', tasks);
      console.log('MOdel', this.get('model'));
    }
  },
})
