import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { storageFor } from 'ember-local-storage';
import subgroupList from '../components/subgroup-list';


let list = EmberObject.extend({
    activeSubgroup(group) {
        const groups = Object.keys(this);
        let subgroup = false;
            for(let sg of Object.keys(this[group].subgroups)) {
                if(this[group].subgroups[sg].active) {
                    subgroup = true;
                    break;
                }
            }
        return subgroup;
    },
    activeGroup() {
        const groups = Object.keys(list);
        let group = false;
        for(let gr of groups) {
            if(list[gr].active) {
                group = true;
                break;
            }
        }
        return group;
    },
}).create({});

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
        const localSt = this.get('stats.groups');
        console.log(this.get('stats.groups'));
        Object.keys(localSt).forEach(el => {
            list.set(el, Group.create({
                active: false,
                group: localSt[el].group,
                subgroups: EmberObject.extend({}).create({}),
            }));
            Object.keys(localSt[el].subgroups).forEach(sg => {
                list.get(el).get('subgroups').set(sg, Subgroup.create({
                    active: false,
                    subgroup: localSt[el].subgroups[sg].subgroup,
                    tasks: EmberObject.extend({}).create({}),
                }));
                if(el == 'g_00000000001' && sg == 'sg_0000000001') {
                    list[el].active = true;
                    list[el].subgroups[sg].active = true;
                };
                Object.keys(localSt[el].subgroups[sg].tasks).forEach(ts => {
                        list.get(el).get('subgroups').get(sg).get('tasks').set(ts, Task.create({
                            completed: localSt[el].subgroups[sg].tasks[ts].completed,
                            task: localSt[el].subgroups[sg].tasks[ts].task,
                        }));
                })
            });
        });

        const g_id = 'g_00000000001';
        const sg_id = 'sg_0000000001';
        
        if(!list[g_id]) {
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
        }


        // list.get(g_id).get('subgroups').get(sg_id).get('tasks').set(`t_${generateId()}`, Task.create({
        //     completed: false,
        //     task: 'rand',
        // }));

        console.log(list);
        console.log('location---', this.location);

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
                this.set('stats.groups', list);
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
                this.set('stats.groups', list);
            }
        },

        addtask() {
            // this.set('id', this.id + 1);
            const _id = `t_${generateId()}`;
            const g_id = this.get('location.group');
            const sg_id = this.get('location.subgroup');
            this.set('active', this.active + 1);
            // const localSt = this.get('stats.tasks');
            // Object.keys(localSt).forEach(el => {
            //     list.set(el, Group.create({
            //         group: localSt[el].group,
            //         subgroups: localSt[el].subgroups,
            //     }));
            //     Object.keys(localSt[el].subgroups).forEach(sg => {
            //         list.set(`${el}.subgroups.${sg}`, Subgroup.create({
            //             subgroup: localSt[el].subgroups[sg],
            //             tasks: localSt[el].subgroups[sg].tasks,
            //         }));
            //         Object.keys(localSt[el].subgroups[sg].tasks).forEach(ts => {
            //             list.set(`${el}.subgroups.${sg}.tasks.${ts}`, Task.create({
            //                 completed: localSt[el].subgroup[sg].tasks[ts].completed,
            //                 task: localSt[el].subgroups[sg].tasks[ts].task,
            //             }));
            //         })
            //     });
            // });
            list.get(g_id).get('subgroups').get(sg_id).get('tasks').set(_id, Task.create({
                completed: false,
                task: this.task,
            }));
            this.set('stats.groups', list);
            console.log(list);
            console.log(this.location);
        },

        changeId() {
            this.set('id', this.id - 1);
        },

        changeActive(id) {
            const tasks = list.get(this.location.group).get('subgroups').get(this.location.subgroup).get('tasks');
            if(tasks.get(id).get('completed')) {
                this.set('active', this.active - 1);
            }else {
                this.set('active', this.active + 1);
            }
        },

        changePassive(id) {
            const tasks = list.get(this.location.group).get('subgroups').get(this.location.subgroup).get('tasks');
            if(tasks.get(id).get('completed')) {
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
                    } 
                });
            }
        },

        clearLocalStorage() {
            this.get('stats').clear();
        },

        deleteGroup(id, event) {
            event.stopPropagation();
            if(confirm('Delete this group?')) {
                list.set(id, undefined);
                delete list[id];
                if(!list.activeGroup()) {
                    const g_id = Object.keys(list)[Object.keys(list).length - 1];
                    const sg_id = Object.keys(list[g_id].subgroups)[0];
                    this.set('location.group', g_id);
                    this.set('location.subgroup', sg_id);
                    if(sg_id) list.get(g_id).subgroups.get(sg_id).set('active', true);
                    list.get(g_id).set('active', true);
                };
                this.set('stats.groups', list);
            }
        },

        deleteTask(id) {
            console.log(id);
            const tasks = list.get(this.location.group).get('subgroups').get(this.location.subgroup).get('tasks');
            tasks.set(id, undefined);
            delete tasks[id];
            this.set('stats.groups', list);
        },

        deleteSubgroup(id) {
            const subgroups = list.get(this.location.group).get('subgroups');
            subgroups.set(id, undefined);
            delete subgroups[id];
            if(!list.activeSubgroup(this.location.group)) {
                this.set('location.subgroup', Object.keys(subgroups)[Object.keys(subgroups).length - 1]);
                subgroups.get(this.location.subgroup).set('active', true);
            };
            this.set('stats.groups', list);
        },

        isCompleted(id) {
            const tasks = list.get(this.location.group).get('subgroups').get(this.location.subgroup).get('tasks');
            if(tasks.get(id).get("completed")) {
                tasks.get(id).set('completed', false);
            }else {
                tasks.get(id).set("completed", true);
            };
            this.set('stats.groups', list);
        },

        saveTask() {
            this.set('stats.groups', list);
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
        },

        cLog() {
            console.log('location', this.location);
            console.log('list', list);
            list.getLs();
        }
    },
});