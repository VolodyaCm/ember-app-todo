import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    list: computed('params.[]', 'location.{group.key,subgroup.key}', function() {
        const g_id = this.location.group.key;
        const sg_id = this.location.subgroup.key;
        const subgroups = this.params[0].get(g_id).get('subgroups');
        const tasks = subgroups.get(sg_id).get('tasks');

        if(sg_id) {
            return tasks;
        }else {
            return subgroups;
        }
    }),
    actions: {
        deleteTask(id) {
            if(confirm('Delete this task?')) {
                this.delete(id);
            };
        },
        completed(id) {
            this.completed(id);
        },
    }
}).reopenClass({
    positionalParams: 'params',
});
