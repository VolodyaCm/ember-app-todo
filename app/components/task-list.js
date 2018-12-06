import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    list: computed('params.[]', function(){
        return this.params[0];
    }),
    changeId: computed('params.[]', function(){
        return this.params[1];
    }),
    changeActive: computed('params.[]', function(){
        return this.params[2];
    }),
    changePassive: computed('params.[]', function(){
        return this.params[3];
    }),
    deleteDataTask: computed('params.[]', function() {
        return this.params[4];
    }),
    actions: {
        deleteTask(arg, id) {
            if(confirm('Delete this task?')) {
                this.deleteDataTask(id);
                arg(id);
                this.changeId(id);
            };
        },
        completed(changeStatus, id) {
            console.log(id);
            changeStatus(id);
            this.changeActive(id);
            this.changePassive(id);
        }
    }
}).reopenClass({
    positionalParams: 'params',
});
