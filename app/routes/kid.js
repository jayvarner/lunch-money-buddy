import Ember from 'ember';
import SessionMixin from '../mixins/session';

const { Route, get, inject: { service } } = Ember;

export default Route.extend(SessionMixin, {
    globals: service(),
    beforeModel() {
        get(this, 'globals').login();
    },

    model(params) {
        return Ember.RSVP.hash({
            kid: this.store.findRecord('kid', params.kid_id),
            methods: this.store.findAll('payment-method'),
            lunches: this.store.findAll('lunch')
        });
    },

    actions: {
        saveDirty(dirty) {
            dirty.setProperties({showBalanceModal: false});
            dirty.save();
        }
    }
});
