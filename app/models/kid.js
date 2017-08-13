import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    school: DS.attr('string'),
    balance: DS.attr('number')
});
