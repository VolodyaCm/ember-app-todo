import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  Subgroup: service('subgroup'),
  store: Ember.inject.service(),
  itemsStore: service('items-store'),
  locationData: service('location-data'),

  actions: {
    saveLocation(subgroupId) {
      const locationData = this.get('locationData');
      const itemsStore = this.get('itemsStore');
      itemsStore.changeState('subgroup', false);
      locationData.saveLocation(undefined, subgroupId);
    },
  }
});
