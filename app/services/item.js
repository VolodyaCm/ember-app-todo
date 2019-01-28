import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
  store: Ember.inject.service(),
  createItem(id, name, state, params) {
    const item = {
      id,
      name,
      state,
    };
    Object.assign(item, params);
    return item;
  },

  saveItem(modelName, item) {
    const store = this.get('store');
    const record = store.createRecord(modelName, item);
    return record.save();
  },

  deleteItem(modelName, id) {
    const store = this.get('store');
    const record = store.peekRecord(modelName, id);
    store.deleteRecord(record);
    record.save();
  }
});
