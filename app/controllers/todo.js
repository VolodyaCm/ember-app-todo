import Controller from '@ember/controller';
import EmberObject from '@ember/object';

const list = EmberObject.extend({}).create({});

const Task = EmberObject.extend({
      deleteTask(id) {
        list.set(id, undefined);
        delete list[id];
      }
});

export default Controller.extend({
    id: 0,
    task: '',
    list: list,
    actions: {
        addtask() {
            const _id = this.id++;
            list.set(_id, Task.create({
                completed: false,
                task: this.task,
            }));
            console.log(list);
        }
    }

});
