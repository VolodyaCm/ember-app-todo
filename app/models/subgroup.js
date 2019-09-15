import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  state: DS.attr('boolean'),
  main: DS.attr('boolean', {defaultValue: false}),
  group: DS.belongsTo('group'),
  tasks: DS.hasMany('task'),
});
