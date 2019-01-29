import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  Task: service('task'),
  store: Ember.inject.service(),
  itemsStore: service('items-store'),
  locationData: service('location-data'),
  location: Ember.computed.alias('locationData.location'),

  actions: {
    deleteTask(taskId) {
      if(confirm('Delete this task?')) {
        const locationData = this.get('locationData');
        const Task = this.get('Task');
        
        Task.deleteItem('task', taskId);
        this.set('location.task.key', null);
        this.set('location.task.key', taskId);
        locationData.updateStatistics();
      }
    },

    taskStateToggle(taskId) {
      const store = this.get('store');
      const locationData = this.get('locationData');
      const taskRecord = store.peekRecord('task', taskId);
      if(taskRecord.get('state')) {
        taskRecord.set('state', false);
        this.set('location.task.obj', taskRecord);
        taskRecord.save();
      }else {
        taskRecord.set('state', true);
        this.set('location.task.state', true);
        this.set('location.task.obj', taskRecord);
        taskRecord.save();
      };
      locationData.updateStatistics();
    },
  }
});
