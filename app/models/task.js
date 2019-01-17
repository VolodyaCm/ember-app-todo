import DS from 'ember-data';

export default DS.Model.extend({
  task: DS.attr('string'),
  state: DS.attr('boolean'),
  subgroup: DS.belongsTo('subgroup'),
});
