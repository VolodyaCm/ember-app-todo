import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    location: computed('params.[]', function() {
        return this.params[6];
    }),
    list: computed('params.[]', 'location.{group.key,subgroup.key}', function() {
        console.log('---changet list');
        if(this.location.subgroup.key) {
            return this.params[0].get(this.location.group.key).get('subgroups').get(this.location.subgroup.key).get('tasks');
        }else {
            return this.params[0].get(this.location.group.key).get('subgroups')
        }
    }),
    stats: computed('params.[]', function() {
        return this.params[2];
    }),
    changeId: computed('params.[]', function(){
        return this.params[1];
    }),
    deleteTask: computed('params.[]', function() {
        return this.params[3];
    }),
    isCompleted: computed('params.[]', function() {
        return this.params[4];
    }),
    saveTask: computed('params.[]', function() {
        return this.params[5];
    }),
    actions: {
        deleteTask(id) {
            if(confirm('Delete this task?')) {
                this.deleteTask(id);
            };
        },
        completed(id) {
            console.log(id);
            this.isCompleted(id);
        },

        cLog() {
            console.log(this.list);
            console.log(this.location);
        },
    }
}).reopenClass({
    positionalParams: 'params',
});
