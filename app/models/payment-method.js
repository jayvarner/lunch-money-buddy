import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    name: DS.attr('string'),
    number: DS.attr('string'),
    email: DS.attr('string'),
    date_year: DS.attr('number'),
    date_month: DS.attr('number'),
    cvv: DS.attr('number'),
    routing: DS.attr('number'),
    methodtype: DS.attr('string'),
    // payment_methods: DS.hasMany('payment_method'),

    lastFour: Ember.computed(function getLastFour() {
        if (this.get('number')) {
            return this.get('number').slice(-4);
        }
        return null;
    }).property('number')
});
