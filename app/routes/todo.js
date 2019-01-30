import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  locationData: service('location-data'),
  itemsStore: service('items-store'),
  model() {
    const store = this.get('store');
    const locationData = this.get('locationData');
    return RSVP.hash({
      location: locationData.location,
      statistics: computed('groups','subgroups','tasks', 'location.task.state', function() {
        return {
          groups: this.groups.length,
          subgroups: this.subgroups.length,
          tasks: this.tasks.length,
          activeTasks: this.tasks.filterBy('state', false).length,
          completedTasks: this.tasks.filterBy('state', true).length, 
        }
      }),
      groups: computed('location.{group.key,subgroup.key}', function() {
        return store.findAll('group');
      }),
      subgroups: computed('location.{group.key,subgroup.key}', function() {
        const currentGroupId = this.location.group.key;
        const subgroups = store.query('subgroup', { filter: {
          group: {
            id: currentGroupId
          }
        }});
        return subgroups;
      }),
      tasks: computed('location.{group.key,subgroup.key,task.key}', function() {
        const currentSubgroupId = this.location.subgroup.key
        const tasks = store.query('task', {
          filter: {
            subgroup: {
              id: currentSubgroupId,
            }
          }
        })
        return tasks;
      }),
    })
  },
});
