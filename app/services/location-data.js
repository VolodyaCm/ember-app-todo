import Service from '@ember/service';
import EmberObject from '@ember/object';
import Ember from 'ember';

export default Service.extend({
  store: Ember.inject.service(),
  location: EmberObject.create({
    group: {
      key: 'g_00000000001',
      obj: null,
      statistics: {
        groups: null,
        subgroups: null,
      }
    },
    subgroup: {
      key: 'sg_0000000001',
      obj: null,
      statistics: {
        tasks: null,
        completedTasks: null,
        activeTasks: null,
      }
    },
    task: {
      key: null,
      state: null,
      obj: null,
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
});
