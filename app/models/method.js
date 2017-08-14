import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    name: DS.attr('string'),
    number: DS.attr('string'),
    date_year: DS.attr('number'),
    date_month: DS.attr('number'),
    cvv: DS.attr('number'),
    routing: DS.attr('number'),
    methodtype: DS.belongsTo('methodtype', {async: true}),
    kidmethod: DS.hasMany('kidmethod', {async: true}),

    lastFour: Ember.computed(function getLastFour() {
        if (this.get('number')) {
            return this.get('number').slice(-4);            
        }
        return null;
    }).property('number')
});
