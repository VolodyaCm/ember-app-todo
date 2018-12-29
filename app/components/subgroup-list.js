import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    list: computed('params.[]', 'location.{group.key,subgroup.key}', function() {
        if(this.location.subgroup.key) {
            return this.params[0].get(this.location.group.key).get('subgroups');
        }
    }),
    actions: {
        saveLocation(key, value) {
            this.saveLocation(key, value);
        },
        deleteSubgroup(key, event) {
            event.stopPropagation();
            if(confirm('Delete this subgroup?')) {
                this.delete(key);
            }
        } 
    }
}).reopenClass({
    positionalParams: 'params',
});
