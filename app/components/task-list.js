import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    location: computed('params.[]', function() {
        return this.params[9];
    }),
    list: computed('params.[]', 'location.{group,subgroup}', function() {
        console.log('---changet list');
        if(this.location.subgroup) {
            return this.params[0].get(this.location.group).get('subgroups').get(this.location.subgroup).get('tasks');
        }else {
            return this.params[0].get(this.location.group).get('subgroups')
        }
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
                // this.deleteDataTask(id);
                this.deleteTask(id);
                // this.changeId(id);
            };
        },
        completed(id) {
            console.log(id);
            this.isCompleted(id);
            this.changeActive(id);
            this.changePassive(id);
        },

        cLog() {
            console.log(this.list);
            console.log(this.location);
        },
    }
}).reopenClass({
    positionalParams: 'params',
});
