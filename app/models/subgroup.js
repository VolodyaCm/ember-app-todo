import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  state: DS.attr('boolean'),
  group: DS.belongsTo('group'),
  tasks: DS.hasMany('task'),
});
