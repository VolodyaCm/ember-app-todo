import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    list: computed('params.[]', function(){
        return this.params[0];
    }),
    actions: {
        deleteTask(arg, id) {
            if(confirm('Delete this task?')) {
                arg(id);
            };
        }
    }
}).reopenClass({
    positionalParams: 'params',
});
