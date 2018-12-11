import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    list: computed('params.[]', function(){
        return this.params[0];
    }),
    stats: computed('params.[]', function() {
        return this.params[5];
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
    deleteTask: computed('params.[]', function() {
        return this.params[6];
    }),
    isCompleted: computed('params.[]', function() {
        return this.params[7];
    }),
    saveTask: computed('params.[]', function() {
        return this.params[8];
    }),
    actions: {
        deleteTask(id) {
            if(confirm('Delete this task?')) {
                this.deleteDataTask(id);
                this.deleteTask(id);
                this.changeId(id);
            };
        },
        completed(id) {
            console.log(id);
            this.isCompleted(id);
            this.changeActive(id);
            this.changePassive(id);
        }
    }
}).reopenClass({
    positionalParams: 'params',
});
