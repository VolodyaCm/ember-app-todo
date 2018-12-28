import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    addTask: computed('params.[]', function(){
        return this.params[0];
    }),
    actions: {
      addTask() {
        this.addTask();
      },
    },
    }).reopenClass({
      positionalParams: 'params'
});
