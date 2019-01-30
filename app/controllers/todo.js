import Controller from '@ember/controller';
import Ember from 'ember';
import { inject as service } from '@ember/service';

function generateId() {
  return `${Math.floor(Math.random() * 10**10)}`;
}

export default Controller.extend({
  init() {
    this._super(...arguments);
    const locationData = this.get('locationData');
    const Group = this.get('Group');
    const Subgroup = this.get('Subgroup');
    const groupId = 'g_00000000001';
    const subgroupId = 'sg_0000000001';
    const group = Group.createItem(groupId, 'main group', true, { main: true });
    Group.saveItem('group', group).then((group) => {
      const subgroup = Subgroup.createItem(subgroupId, 'main subgroup', true, {
        main: true,
        group,
      });
      Subgroup.saveItem('subgroup', subgroup);
      locationData.saveLocation(groupId, subgroupId);
    });
    setTimeout(() => {this.set('location.task.state', 'start')});
  },
  Group: service('group'),
  Subgroup: service('subgroup'),
  Task: service('task'),
  itemsStore: service('items-store'),
  locationData: service('location-data'),
  location: Ember.computed.alias('locationData.location'),
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
      const locationData = this.get('locationData');
      const itemsStore = this.get('itemsStore');
      if (e.keyCode == 13) {
        const groupId = `g_${generateId()}`;
        itemsStore.changeState('group', false);
        locationData.clearLocation('subgroup');
        const item = Group.createItem(groupId, this.group, false);
        Group.saveItem('group', item).then((result) => {
          result.set('state', true);
          locationData.saveLocation(groupId);
          setTimeout(() => Group.scrollDown());
        })
      }
    },

    addSubgroup(e) {
      const store = this.get('store');
      const Subgroup = this.get('Subgroup');
      const itemsStore = this.get('itemsStore');
      const locationData = this.get('locationData');
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
          setTimeout(() => Subgroup.scrollRight());
        })
      }
    },

    addTask() {
      const store = this.get('store');
      const locationData = this.get('locationData');
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
      setTimeout(() => Task.scrollDown());
    },

    deleteCompletedTask() {
      if(confirm('Delete completed tasks?')) {
        const model = this.get('model');
        const Task = this.get('Task');
        const locationData = this.get('locationData');
        const tasks = model.tasks;
        tasks.forEach(el => {
          if(el.state) Task.deleteItem('task', el.id);
        });
      }
    },

    deleteSubgroup(subgroupId) {
      if (confirm('Delete this subgroup?')) {
        const store = this.get('store');
        const model = this.get('model');
        const Subgroup = this.get('Subgroup');
        const locationData = this.get('locationData');
        const itemsStore = this.get('itemsStore');
        const subgroup = store.peekRecord('subgroup', subgroupId);
        const subgroupIndex = model.subgroups.indexOf(subgroup);
        Subgroup.deleteItem('subgroup', subgroupId).then(() => {
          if (!itemsStore.activeItem('subgroup') && model.subgroups.length - 1) {
            if(model.subgroups.get('firstObject').get('id') === subgroupId) {
              locationData.saveLocation(undefined, model.subgroups.objectAt(subgroupIndex + 1).get('id'));
            }else {
              locationData.saveLocation(undefined, model.subgroups.objectAt(subgroupIndex - 1).get('id'));
            }
          }else {
            locationData.clearLocation('subgroup');
          }
        })
      }
    },

    pressEnter(addtask, e) {
      if (e.keyCode == 13) {
        addtask();
      }
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
      console.log('LOCATION', this.get('locationData').location);
      console.log('MODEL', this.get('model'));
    }
  },
})
