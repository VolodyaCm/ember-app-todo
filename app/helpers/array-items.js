import { helper } from '@ember/component/helper';
import Ember from 'ember';

export function arrayItems(params) {
  const [store, exportCompletedTasks] = params;
  return store.findAll('group').then(function(result) {
    const data = [];
    result.forEach(el => {
      data.push([el.get('id'), el.get('name'), el.get('state'), 'group']);
    });
    return data;
  }).then(function(data) {
    return store.findAll('subgroup').then(function(result) {
      result.forEach(el => {
        data.push([el.get('id'), el.get('name'), el.get('state'), el.get('group.id'), 'subgroup']);
      })
      return data;
    })
  }).then(function(data) {
    return store.findAll('task').then(function(result) {
      result.forEach(el => {
        if(!el.get('state') && !exportCompletedTasks) {
          data.push([el.get('id'), el.get('task'), el.get('state'), el.get('subgroup.id'), 'task']);
        }else {
          data.push([el.get('id'), el.get('task'), el.get('state'), el.get('subgroup.id'), 'task']);
        }
      });
      return data;
    });
  })
}

export default helper(arrayItems);
