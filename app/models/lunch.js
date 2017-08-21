import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    name: DS.attr('string'),
    day: DS.attr('date'),
    kids: DS.hasMany('kid'),
    description: DS.attr('string'),
    kidIds: Ember.computed(function kId() {
        let kIds =[];
        this.get('kids').forEach((k) => {
            kIds.push(k.id);
        });
        return kIds;
    }).property('kids'),
    nday: Ember.computed(function num() {
        if (this.id < 6) {
            return this.id
        } else if (this.id < 11) {
            return parseInt(this.id) + 2;
        } else if (this.id < 16) {
            return parseInt(this.id) + 4;
        } else if (this.id < 21) {
            return parseInt(this.id) + 6
        } else if (this.id < 24) {
            return parseInt(this.id) + 8
        }
        return '';
    })
});
