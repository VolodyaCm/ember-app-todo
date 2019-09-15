import Service from '@ember/service';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default Service.extend({
  store: Ember.inject.service(),
  locationData: service('location-data'),

  changeState(modelName, state) {
    const store = this.get('store');
    store.peekAll(modelName).forEach(el => {
      el.set('state', state);
      el.save(); 
    });
  },

  activeItem(modelName) {
    const store = this.get('store');
    const records = store.peekAll(modelName);
    return records.filterBy('state', true).length ? true : false
  },
});
