import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { storageFor } from 'ember-local-storage';


let list = EmberObject.extend({}).create({});

const Task = EmberObject.extend({
    deleteTask(id, tasks) {
        tasks.set(id, undefined);
        delete tasks[id];
    }
});

const Group = EmberObject.extend({

});

const Subgroup = EmberObject.extend({

});

function generateId() {
    return `${Math.floor(Math.random() * 1000000000)}`;
};

export default Controller.extend({
    init() {
        const data = this.get('stats.tasks');
        console.log(this.get('stats.tasks'));
        Object.keys(data).forEach(el => {
        list.set(el, Task.create({
            completed: data[el].completed,
            task: data[el].task,
        }));
        this.set('id', Object.keys(data).length);
        
        // this.set('location.group', `g_${generateId()}`);
        // this.set('location.subgroup', `sg_${generateId()}`);
        });

        const g_id = 'g_00000000001';
        const sg_id = 'sg_0000000001';

        list.set(g_id, Group.create({
            group: 'Main group',
            subgroups: EmberObject.extend({}).create({}),
            active: true,
        }));

        list.get(g_id).get('subgroups').set(sg_id, Subgroup.create({
            subgroup: 'Main subgroup',
            tasks: EmberObject.extend({}).create({}),
            active: true,
        }));

        // list.get(g_id).get('subgroups').get(sg_id).get('tasks').set(`t_${generateId()}`, Task.create({
        //     completed: false,
        //     task: 'rand',
        // }));

        console.log(list);

    },
    stats: storageFor('stats'),
    location: {
        group: 'g_00000000001',
        subgroup: 'sg_0000000001',
    },
    group: '',
    subgroup: '',
    task: '',
    id: 0,
    active: 0,
    passive: 0,
    list: list,
    actions: {
        addGroup(e) {
            if(e.keyCode == 13) {
                const _id = `g_${generateId()}`;
                Object.keys(list).forEach(el => {
                    list.get(el).set('active', false);
                });
                list.set(_id, Group.create({
                    group: this.group,
                    subgroups: EmberObject.extend({}).create({}),
                    active: true,
                }));
                this.set('location.group', _id);
                this.set('location.subgroup', undefined);
                console.log(list);
            }
        },

        addSubgroup(e) {
            if(e.keyCode == 13) {
                const _id = `sg_${generateId()}`;
                const g_id  = this.get('location.group');
                Object.keys(list.get(g_id).get('subgroups')).forEach(el => {
                    list.get(g_id).get('subgroups').get(el).set('active', false);
                });
                list.get(g_id).subgroups.set(_id, Subgroup.create({
                    subgroup: this.subgroup,
                    tasks: EmberObject.extend({}).create({}),
                    active: true,
                }));
                this.set('location.subgroup', _id);
                console.log(list);
            }
        },

        addtask() {
            // this.set('id', this.id + 1);
            const _id = `t_${generateId()}`;
            const g_id = this.get('location.group');
            const sg_id = this.get('location.subgroup');
            // this.set('active', this.active + 1);
            // const tasks = this.get('stats.tasks');
            // Object.keys(tasks).forEach(el => {
            //     list.set(el, Task.create({
            //         completed: tasks[el].completed,
            //         task: tasks[el].task,
            //     }));
            // });
            list.get(g_id).get('subgroups').get(sg_id).get('tasks').set(_id, Task.create({
                completed: false,
                task: this.task,
            }));
            this.set('stats.tasks', list);
            console.log(list);
            console.log(this.location);
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
            if(this.active && !(list[id].completed)) {
                this.set('active', this.active - 1);
            }
            if(this.passive && list[id].completed) {
                this.set('passive', this.passive - 1);
            }
        },

        deleteCompletedTask() {
            if(confirm(`Delete tasks?`)) {
                const tasks = list.get(this.location.group).get('subgroups').get(this.location.subgroup).get('tasks');
                console.log('tasks', tasks);
                Object.keys(tasks).forEach(el => {
                    if(tasks[el].completed) {
                        delete tasks[el].deleteTask(el, tasks);
                        this.set('passive', this.passive - 1);
                        this.set('id', this.id - 1);
                        this.set('stats.tasks', list);
                    } 
                });
            }
        },

        clearLocalStorage() {
            this.get('stats').clear();
        },

        deleteTask(id) {
            list.set(id, undefined);
            delete list[id];
            this.set('stats.tasks', list);
        },

        isCompleted(id) {
            if(list.get(id).get("completed")) {
                list.get(id).set('completed', false);
                this.set('stats.tasks', list);
            }else {
                list.get(id).set("completed", true);
                this.set('stats.tasks', list);
            }
        },

        saveTask() {
            this.set('stats.tasks', list);
        },

        pressEnter(addtask, e) {
            if(e.keyCode == 13) {
                console.log(e.keyCode);
                addtask();
            }
        },

        saveLocation(key) {
            this.set('location.group', key);
            this.set('location.subgroup', Object.keys(list[key].subgroups)[0]);
            Object.keys(list).forEach(el => {
                list.get(el).set(`active`, false);
                Object.keys(list[el].subgroups).forEach(sg => {
                    list.get(el).get('subgroups').get(sg).set(`active`, false);
                });
            });
            list.get(key).set(`active`, true);
            
            list.get(key).get('subgroups').get(Object.keys(list.get(key).get('subgroups'))[0]).set(`active`, true);
            console.log(this.location);
        },

        saveLocationForSubgroup(key, value) {
            this.set('location.subgroup', key);
            Object.keys(list).forEach(el => {
                Object.keys(list[el].subgroups).forEach(sg => {
                    list.get(el).get('subgroups').get(sg).set(`active`, false);
                });
            });
            value.set('active', true);
        }
    },
});