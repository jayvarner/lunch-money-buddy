import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    number: DS.attr('number'),
    default: DS.attr('boolean'),
    date_year: DS.attr('number'),
    date_month: DS.attr('number'),
    cvs: DS.attr('number'),
    routing: DS.attr('number'),
    methodtype: DS.belongsTo('methodtype')
});
