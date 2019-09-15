import Service from '@ember/service';
import EmberObject from '@ember/object';
import StateMachine from 'npm:javascript-state-machine';
import { inject as service } from '@ember/service';

export default Service.extend({
  store: Ember.inject.service(),
  states: EmberObject.extend({}).create({}),
  locationData: service('location-data'),
  location: Ember.computed.alias('locationData.location'),

  addState(taskId) {
    const store = this.get('store');
    const taskRecord = store.peekRecord('task', taskId);
    const self = this;
    const state = new StateMachine({
      init: taskRecord.state,
      transitions: [
        { name: 'taskState', from: 'active', to: 'completed' },
        { name: 'taskState', from: 'completed', to: 'active' },
      ],
      methods: {
        onTaskState() {
          taskRecord.set('state', this.state);
          taskRecord.save().then(() => {
            self.set('location.task.state', null);
            self.set('location.task.state', this.state);
          })
        },
      }
    });
    this.set(`states.${taskId}`, state);
  }
});
