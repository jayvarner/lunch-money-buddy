import DS from 'ember-data';

export default DS.Model.extend({
    kid: DS.belongsTo('kid', {async: true}),
    method: DS.belongsTo('method', {async: true})
});
