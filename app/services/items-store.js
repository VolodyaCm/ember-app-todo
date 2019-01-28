import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
  store: Ember.inject.service(),

  changeState(modelName, state) {
    const store = this.get('store');
    store.peekAll(modelName).forEach(el => {
      el.set('state', state);
    })
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

  getStats() {
    const store = this.get('store');
    const groups = store.peekAll('group');
    const subgroups = store.peekAll('subgroup');
    const tasks = store.peekAll('task');
    return {
      groups: groups.length,
      subgroups: subgroups.length,
      tasks: tasks.length,
      completedTasks: tasks.reduce((sum, el) => {
        if(el.state) return sum + 1;
      }, 0),
      activeTasks: tasks.reduce((sum, el) => {
        if(!el.reduce) return sum + 1;
      })
    }
  }

});
