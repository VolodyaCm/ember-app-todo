import DS from 'ember-data';
import Adapter from 'ember-local-storage/adapters/local';

export default Adapter.extend({
  createRecord(store, type, snapshot) {
    return this._super(...arguments);
  },
  findRecord(store, type, id, snapshot) {
    return this._super(...arguments)
  }
});