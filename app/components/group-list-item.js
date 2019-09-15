import Component from '@ember/component';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default Component.extend({
  Group: service('group'),
  store: Ember.inject.service(),
  storeItems: service('store-items'),
  locationData: service('location-data'),
  
  actions: {
    deleteGroup(groupId, event) {
      event.stopPropagation();
      const store = this.get('store');
      const Group = this.get('Group');
      const locationData = this.get('locationData');
      const storeItems = this.get('storeItems');
      const groups = store.peekAll('group');
      const currentGroup = store.peekRecord('group', groupId);
      const groupIndex = groups.indexOf(currentGroup);
      if (confirm('Delete this group?')) {
        Group.deleteItem('group', groupId).then(() => {
          if (!storeItems.activeItem('group')) {
            const group = groups.objectAt(groupIndex - 1);
            const subgroups = group.get('subgroups');
            const subgroup = subgroups.getWithDefault('firstObject', { id: null });
            const groupId = group.get('id');
            const subgroupId = subgroup.id;
            storeItems.changeState('group');
            storeItems.changeState('subgroup');
            locationData.saveLocation(groupId, subgroupId);
          }
        })
      }
    },

    saveLocation(groupId) {
      const model = this.get('model');
      const locationData = this.get('locationData');
      const storeItems = this.get('storeItems');
      storeItems.changeState('group', false);
      locationData.saveLocation(groupId, null);
      model.subgroups.then(subgroups => {
        const subgroup = subgroups.getWithDefault('firstObject', { id: null });
        const subgroupId = subgroup.id;
        storeItems.changeState('subgroup', false);
        locationData.saveLocation(undefined, subgroupId);
      })

    },
  }
});
