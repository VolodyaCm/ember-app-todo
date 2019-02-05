import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  Subgroup: service('subgroup'),
  store: Ember.inject.service(),
  storeItems: service('store-items'),
  locationData: service('location-data'),

  actions: {
    saveLocation(subgroupId) {
      const locationData = this.get('locationData');
      const storeItems = this.get('storeItems');
      storeItems.changeState('subgroup', false);
      locationData.saveLocation(undefined, subgroupId);
    },
  }
});
