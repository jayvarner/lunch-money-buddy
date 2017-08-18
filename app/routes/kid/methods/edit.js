import Ember from 'ember';

export default Ember.Route.extend({

    model(params) {
        console.log('params', params);
        return Ember.RSVP.hash({
            kid: this.store.findRecord('kid', params.kid_id),
            method: this.store.findRecord('method', params.method_id)
        });
    }
});
