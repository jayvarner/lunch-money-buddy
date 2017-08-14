import Ember from 'ember';
import SessionMixin from '../mixins/session';

const { Route, RSVP, get, inject: { service } } = Ember;

export default Route.extend(SessionMixin, {
    globals: service(),
    beforeModel() {
        get(this, 'globals').login();
    },

    model(params) {
        return RSVP.hash({
            kid: this.store.findRecord('kid', params.kid_id),
            kidmethods: this.store.findAll('kidmethod'),
            types: this.store.findAll('methodtype')
        });
    }
});
