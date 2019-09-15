import Component from '@ember/component';
import { inject as service } from '@ember/service';
import Ember from 'ember';

const fileTypes = {
  csv: {
    windows: 'application/vnd.ms-excel',
    mac: 'text/csv' 
  },
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
}

function execute(generator, yieldValue) {
  let next = generator.next(yieldValue);
  if (!next.done) {
    next.value.then(
      result => execute(generator, result),
      err => generator.throw(err)
    );
  };
}

export default Component.extend({
  store: Ember.inject.service(),
  locationData: service('location-data'),
  group: service('group'),
  subgroup: service('subgroup'),
  task: service('task'),
  location: Ember.computed.alias('locationData.location'),
  err: {
    fileType: false
  },
  actions: {
    importData() {
      const file = document.querySelector('.fileInput').files[0];
      const reader = new FileReader();
      reader.onload = event => {
        const data = XLSX.read(event.target.result, {
          type: 'binary'
        });
        const jsonData = this.sheetToJson(file.type, data);
        if (jsonData) {
          execute(this.saveDataToStore(jsonData));
          setTimeout(() => {this.set('location.task.key', 'import')});
        }
      };
      reader.readAsBinaryString(file);
    }
  }
}).reopen({
  *saveDataToStore(jsonData) {
    const store = this.get('store');
    const Group = this.get('group');
    const Subgroup = this.get('subgroup');
    const Task = this.get('task');
    for(let item of jsonData) {
      const [id, name, state, type, bindId] = item;
      if(type == 'group') {
        if(store.peekRecord('group', id)) continue;
        const record = Group.createItem(id, name, state);
        yield Group.saveItem('group', record);
      }else if(type == 'subgroup') {
        if(store.peekRecord('subgroup', id)) continue;
        const group = store.peekRecord('group', bindId);
        const record = Subgroup.createItem(id, name, state, {
          group
        });
        yield Subgroup.saveItem('subgroup', record);
      }else if(type == 'task') {
        if(store.peekRecord('task', id)) continue;
        const subgroup = store.peekRecord("subgroup", bindId);
        const record = Task.createItem(id, name, state, {
          subgroup
        });
        yield Task.saveItem('task', record);
      }
    }
  },

  sheetToJson(fileType, data) {
    if(fileType === fileTypes.csv.mac) {
      return XLSX.utils.sheet_to_json(data.Sheets['Sheet1'], {
        header: 1,
        raw: true
      });
    }else if(fileType === fileTypes.xlsx) {
      return XLSX.utils.sheet_to_json(data.Sheets['Tasks Sheet'], {
        header: 1,
        raw: true
      });
    }else {
      this.set('err.fileType', true);
    }
  }
})
