import { helper } from '@ember/component/helper';

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
        data.push([el.get('id'), el.get('name'), el.get('state'), 'subgroup', el.get('group.id')]);
      })
      return data;
    })
  }).then(function(data) {
    return store.findAll('task').then(function(result) {
      result.forEach(el => {
        if(el.get('state') === 'active' && !exportCompletedTasks) {
          data.push([el.get('id'), el.get('task'), el.get('state'), 'task', el.get('subgroup.id')]);
        }else if(exportCompletedTasks) {
          data.push([el.get('id'), el.get('task'), el.get('state'), 'task', el.get('subgroup.id')]);
        }
      });
      return data;
    });
  })
}

export default helper(arrayItems);
