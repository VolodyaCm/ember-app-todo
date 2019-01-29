import Component from '@ember/component';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default Component.extend({
  Group: service('group'),
  store: Ember.inject.service(),
  itemsStore: service('items-store'),
  locationData: service('location-data'),
  
  actions: {
    deleteGroup(groupId, event) {
      event.stopPropagation();
      const store = this.get('store');
      const Group = this.get('Group');
      const locationData = this.get('locationData');
      const itemsStore = this.get('itemsStore');
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

    saveLocation(groupId) {
      const store = this.get('store');
      const locationData = this.get('locationData');
      const itemsStore = this.get('itemsStore');
      const subgroups = store.peekRecord('group', groupId).subgroups;
      const subgroup = subgroups.get('firstObject');
      const subgroupId = subgroup ? subgroup.get('id') : null;

      itemsStore.changeState('group', false);
      itemsStore.changeState('subgroup', false);
      locationData.saveLocation(groupId, subgroupId);
      locationData.updateStatistics();
    },
  }
});
