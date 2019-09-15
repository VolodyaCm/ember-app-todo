import Component from '@ember/component';
import Ember from 'ember';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: Ember.inject.service(),
  locationData: service('location-data'),
  location: Ember.computed.alias('locationData.location'),
  taskState: service('task-state'),
  states: Ember.computed.alias('taskState.states'),
  Task: service('task'),

  actions: {
    deleteTask(taskId) {
      if(confirm('Delete this task?')) {
        const Task = this.get('Task');
        Task.deleteItem('task', taskId);
        this.set('location.task.key', null);
        this.set('location.task.key', taskId);
      }
    },

    taskStateToggle(taskId) {
      const states = this.get('states');
      const taskState = this.get('taskState');
      if(!states.get(taskId)) taskState.addState(taskId);
      states.get(taskId).taskState();
    },
  }
});
