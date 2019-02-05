import Component from '@ember/component';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default Component.extend({
  Group: service('group'),
  store: Ember.inject.service(),
  itemsStore: service('items-store'),
  locationData: service('location-data'),
  
  actions: {
    saveLocation(groupId) {
      const store = this.get('store');
      const locationData = this.get('locationData');
      const itemsStore = this.get('itemsStore');
      const subgroups = store.peekRecord('group', groupId).subgroups;
      const subgroup = subgroups.getWithDefault('firstObject', { id: null });
      const subgroupId = subgroup.id;
  
      itemsStore.changeState('group', false);
      itemsStore.changeState('subgroup', false);
      locationData.saveLocation(groupId, subgroupId);
    },
  }
});
