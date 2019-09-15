import DS from 'ember-data';

export default DS.Model.extend({
  task: DS.attr('string'),
  state: DS.attr('string'),
  subgroup: DS.belongsTo('subgroup'),
});
