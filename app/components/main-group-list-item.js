import Component from '@ember/component';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default Component.extend({
  Group: service('group'),
  store: Ember.inject.service(),
  storeItems: service('store-items'),
  locationData: service('location-data'),
  
  actions: {
    saveLocation(groupId) {
      const store = this.get('store');
      const locationData = this.get('locationData');
      const storeItems = this.get('storeItems');
      const subgroups = store.peekRecord('group', groupId).subgroups;
      const subgroup = subgroups.getWithDefault('firstObject', { id: null });
      const subgroupId = subgroup.id;
  
      storeItems.changeState('group', false);
      storeItems.changeState('subgroup', false);
      locationData.saveLocation(groupId, subgroupId);
    },
  }
});
