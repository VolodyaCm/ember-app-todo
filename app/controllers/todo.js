import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { storageFor } from 'ember-local-storage';
import FileSaver from 'file-saver';
/* global XLSX */

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

let list = EmberObject.extend({
    createGroup(key) {
        this.set(key[0], Group.create({
            group: key[1],
            active: false,
            subgroups: EmberObject.extend({}).create({})
        }));
        return key[0];
    },

    createSubgroup(key, location) {
        this.get(location.group).get('subgroups').set(key[0], Subgroup.create({
            subgroup: key[1],
            active: false,
            tasks: EmberObject.extend({}).create({})
        }));
    },

    createTask(key, location) {
        this.get(location.group).get('subgroups').get(location.subgroup).get('tasks').set(key[0], Task.create({
            task: key[1],
            completed: key[2]
        }));
    },

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

    deactivationGroup() {
        for(let key of Object.keys(list)) {
            list.get(key).set('active', false);
        }
    },

    getSheet(exportCompletedTasks) {
        const ws_data = [];
        const groups = Object.keys(this);
            for(let gr of groups) {
                ws_data.push([gr,this[gr].group,this[gr].active]);
                for(let sg of Object.keys(this[gr].subgroups)) {
                    ws_data.push([sg,this[gr].subgroups[sg].subgroup,this[gr].subgroups[sg].active]);
                    for(let ts of Object.keys(this[gr].subgroups[sg].tasks)) {
                        if(exportCompletedTasks) {
                            ws_data.push([ts,this[gr].subgroups[sg].tasks[ts].task,this[gr].subgroups[sg].tasks[ts].completed]);
                        }else {
                            if(!this[gr].subgroups[sg].tasks[ts].completed) {
                                ws_data.push([ts,this[gr].subgroups[sg].tasks[ts].task,this[gr].subgroups[sg].tasks[ts].completed]);
                            }
                        }
                    }
                }
            }
            return ws_data;
    }
}).create({});

function generateId() {
    return `${Math.floor(Math.random() * 1000000000)}`;
};

export default Controller.extend({
    init() {
        const localSt = this.get('stats.groups');
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
    },
    stats: storageFor('stats'),
    location: {
        group: 'g_00000000001',
        subgroup: 'sg_0000000001',
    },
    err: {
        fileType: {
            active: false,
        }
    },
    menu: false,
    csvFile: '',
    isShowingExportModal: false,
    isShowingImportModal: false,
    exportCompletedTasks: true,
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
                Object.keys(tasks).forEach(el => {
                    if(tasks[el].completed) {
                        delete tasks[el].deleteTask(el, tasks);
                        this.set('passive', this.passive - 1);
                        this.set('id', this.id - 1);
                    } 
                });
                this.set('stats.groups', list);
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

        toggleModal() {
            if(this.get('isShowingImportModal')) {
                this.set('err.fileType.active', false);
                this.set('isShowingImportModal', false);
            }else if(this.get('isShowingExportModal')) {
                this.set('isShowingExportModal', false);
            }
        },

        openExportModal() {
            this.set('isShowingExportModal', true);
        },

        openImportModal() {
            this.set('isShowingImportModal', true);
        },

        createCSVfile() {
            var wb = XLSX.utils.book_new();
                wb.Props = {
                    Title: "Todo app",
                    Subject: "Tasks",
                    Author: "Todo",
                    CreatedDate: new Date()
                };
                wb.SheetNames.push("Tasks Sheet");
                var ws_data = list.getSheet(this.exportCompletedTasks);
                var ws = XLSX.utils.aoa_to_sheet(ws_data);
                wb.Sheets["Tasks Sheet"] = ws;
                var wbout = XLSX.write(wb, {bookType:'csv',  type: 'binary'});

                function s2ab(s) {
                    var buf = new ArrayBuffer(s.length);
                    var view = new Uint8Array(buf);
                    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                    return buf;
                }

                FileSaver.saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'Tasks.csv');
        },

        createXLSXfile() {
                var wb = XLSX.utils.book_new();
                wb.Props = {
                    Title: "Todo app",
                    Subject: "Tasks",
                    Author: "Todo",
                    CreatedDate: new Date()
                };
                wb.SheetNames.push("Tasks Sheet");
                var ws_data = list.getSheet(this.exportCompletedTasks);
                var ws = XLSX.utils.aoa_to_sheet(ws_data);
                wb.Sheets["Tasks Sheet"] = ws;
                var wbout = XLSX.write(wb, {bookType:'xlsx',  type: 'binary'});

                function s2ab(s) { 
                    var buf = new ArrayBuffer(s.length);
                    var view = new Uint8Array(buf);
                    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                    return buf;
                }

                FileSaver.saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'Tasks.xlsx');
        },

        importTasks() {
            const self = this;
            const file = document.querySelector('.fileInput').files[0];
            const reader = new FileReader();
            this.set('err.fileType.active', false);
            reader.onload = function(e) {

                const data = XLSX.read(e.target.result, {type: 'binary'});
                let jsonData;

                if(file.name.slice(-3) == 'csv') {
                    jsonData = XLSX.utils.sheet_to_json(data.Sheets['Sheet1'], {header:1, raw:true});
                }else if (file.name.slice(-4) == 'xlsx') {
                    jsonData = XLSX.utils.sheet_to_json(data.Sheets['Tasks Sheet'], {header:1, raw:true});
                }else {
                    self.set('err.fileType.active', true);
                }

                if(jsonData) {
                    for(let key of jsonData) {
                        if(key[0][0] == 'g') {
                            if (!list[key[0]]) {
                                list.createGroup(key);
                            }
                            self.set('location.group', key[0]);
                            self.set('stats.groups', list);
                        }else if(key[0].split('_')[0] == 'sg') {
                            if(!list[self.location.group].subgroups[key[0]]) {
                                list.createSubgroup(key, self.location);
                            }
                            self.set('location.subgroup', key[0]);
                            self.set('stats.groups', list);
                        }else if (key[0][0] == 't') {
                            if(!list[self.location.group].subgroups[self.location.subgroup].tasks[key[0]]) {
                                list.createTask(key, self.location);
                            }
                            self.set('stats.groups', list);
                        }
                    }
                    self.set('location.group', Object.keys(list)[0]);
                    self.set('location.subgroup', Object.keys(list[Object.keys(list)[0]].subgroups)[0]);
                }
            };
            reader.readAsBinaryString(file);
        },

        toggleMenu() {
            if(this.menu) {
                    this.set('menu', false);
            }else {
                this.set('menu', true);
            };
        },

        cLog() {
            console.log('location', this.get('location'));
            console.log('list', list);
            console.log(this.location);
            console.log(list.getSheet(this.exportCompletedTasks));
        }
    },
});