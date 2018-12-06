import Controller from '@ember/controller';
import EmberObject from '@ember/object';

const list = EmberObject.extend({}).create({});

const Task = EmberObject.extend({
      isCompleted(id) {
            if(list.get(id).get("completed")) {
                list.get(id).set('completed', false)
            }else {
                list.get(id).set("completed", true);
            }
      },
      deleteTask(id) {
        list.set(id, undefined);
        delete list[id];
      }
});

export default Controller.extend({
    id: 0,
    task: '',
    active: 0,
    passive: 0,
    list: list,
    actions: {
        addtask() {
            const _id = this.set('id', this.id + 1);
            this.set('active', this.active + 1);
            list.set(_id, Task.create({
                completed: false,
                task: this.task,
            }));
            console.log(list);
        },

        changeId() {
            this.set('id', this.id - 1);
        },

        changeActive(id) {
            if(list.get(id).get('completed')) {
                this.set('active', this.active - 1);
            }else {
                this.set('active', this.active + 1);
            }
        },

        changePassive(id) {
            if(list.get(id).get('completed')) {
                this.set('passive', this.passive + 1);
            }else {
                this.set('passive', this.passive - 1);
            }
        },

        deleteDataTask(id) {
            console.log(this.passive && list[id].completed);
            if(this.active && !(list[id].completed)) {
                this.set('active', this.active - 1);
            };
            if(this.passive && list[id].completed) {
                this.set('passive', this.passive - 1);
            }
        },

        deleteCompletedTask() {
            if(confirm(`Delete tasks?`)) {
                for(let key in list) {
                    if(list[key].completed) {
                        delete list[key].deleteTask(key);
                    }
                }
            }
        },
    }

});
