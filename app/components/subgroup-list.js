import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    list: computed('params.[]', 'location.{group,subgroup}', function() {
        console.log('sg', this.location.subgroup);
        if(this.location.subgroup) {
            console.log(this.params[0].get(this.location.group).get('subgroups').get(this.location.subgroup));
            return this.params[0].get(this.location.group).get('subgroups');
        }
    }),
    location: computed('params.[]', function() {
        return this.params[1];
    }),
    saveLocationForSubgroup: computed('params.[]', function() {
        return this.params[2];
    }),
    deleteSubgroup: computed('params.[]', function() {
        return this.params[3];
    }), 
    actions: {
        saveLocation(key, value) {
            this.saveLocationForSubgroup(key, value);
        },
        deleteSubgroup(key, event) {
            event.stopPropagation();
            if(confirm('Delete this subgroup?')) {
                this.deleteSubgroup(key);
            }
        } 
    }
}).reopenClass({
    positionalParams: 'params',
});
