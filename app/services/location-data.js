import Service from '@ember/service';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';
import Ember from 'ember';

export default Service.extend({
  store: Ember.inject.service(),
  ItemsStore: service('items-store'),
  location: EmberObject.create({
    group: {
      key: 'g_00000000001',
      obj: null,
      statistics: {
        amountGroups: 0
      }
    },
    subgroup: {
      key: 'sg_0000000001',
      obj: null,
      statistics: {
        amountSubgroups: 0,
      }
    },
    task: {
      key: null,
      state: null,
      obj: null,
      statistics: {
        amountTasks: 0,
        amountCompletedTasks: 0,
        amountActiveTasks: 0,
      }
    }
  }),

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

  clearLocation(type) {
    const location = this.get(`location.${type}`)
    if(location) {
      this.set(`location.${type}.key`, null);
      this.set(`location.${type}.obj`, null);
    }
  },

  updateStatistics() {
    const statistics = this.get('ItemsStore').getStatistic();
    this.set('location.group.statistics.amountGroups', statistics.groups);
    this.set('location.subgroup.statistics.amountSubgroups', statistics.subgroups);
    this.set('location.task.statistics.amountTasks', statistics.tasks.all);
    this.set('location.task.statistics.amountCompletedTasks', statistics.tasks.completed);
    this.set('location.task.statistics.amountActiveTasks', statistics.tasks.active);
  }
});
