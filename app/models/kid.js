import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    name: DS.attr('string'),
    school: DS.attr('string'),
    balance: DS.attr('number'),
    autopay: DS.attr('boolean'),
    ignoreBalance: DS.attr('boolean', {
        defaultValue: true
    }),
    default_method: DS.attr('string'),
    lunches: DS.hasMany('lunch'),
    balanceClass: Ember.computed(function low() {
        if (this.get('balance') < 20) {
            return 'lowbalance';
        }
        return 'goodbalance'
    }).property('balance'),
    showBalanceModal: Ember.computed(function show() {
        if (this.get('balance') < 20) {
            return true;
        }
    })
});
