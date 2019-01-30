import Service from '@ember/service';
import { inject as service } from '@ember/service';
import Ember from 'ember';
import group from './group';

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
    const records = store.findAll(modelName);
    let state = false;
    records.forEach(el => {
      if(el.state) state = true;
    });
    return state;
  },
});
