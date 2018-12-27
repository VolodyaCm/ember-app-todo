import Controller from '@ember/controller';
import EmberObject from '@ember/object';

const list = EmberObject.create({});

function random() {
    return Math.floor(Math.random() * 10**10);
}

const Task = EmberObject.extend({
      deleteTask(id) {
        list.set(id, undefined);
        delete list[id];
      }
}).reopenClass({
    generateId() {
        return `t_${random()}`;
    }
})

export default Controller.extend({
    id: 0,
    task: '',
    list: list,
    actions: {
        addTask() {
            const _id = Task.generateId();
            list.set(_id, Task.create({
                completed: false,
                task: this.task,
            }));
        },

        deleteTask(id) {
            list[id].deleteTask(id);
        }
    }

});
