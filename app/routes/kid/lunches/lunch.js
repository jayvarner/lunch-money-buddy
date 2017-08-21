import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('lunch', params.lunch_id);
    },

    actions: {
        // addFavorite() {
        //     const k = this.get('kid');
        //     const l = this.get('lunch');
        //
        //     l.get('kidIds').push(k);
        //     console.log('this.event.target', this.event.target);
        // }
    }
});
