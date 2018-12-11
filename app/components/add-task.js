import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    addtask: computed('params.[]', function(){
        return this.params[0];
    }),
    actions: {
      addtask() {
        this.addtask();
      },
    },
    }).reopenClass({
      positionalParams: 'params'
});
