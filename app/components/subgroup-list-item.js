import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  Subgroup: service('subgroup'),
  store: Ember.inject.service(),
  itemsStore: service('items-store'),
  locationData: service('location-data'),

  actions: {
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

    saveLocation(subgroupId) {
      const locationData = this.get('locationData');
      const itemsStore = this.get('itemsStore');
      itemsStore.changeState('subgroup', false);
      locationData.saveLocation(undefined, subgroupId);
      locationData.updateStatistics();
    },
  }
});
