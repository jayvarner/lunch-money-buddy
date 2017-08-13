import Ember from 'ember';
import SessionMixin from '../mixins/session';

const { Route, get, inject: { service } } = Ember;

export default Route.extend(SessionMixin, {
    globals: service(),
    beforeModel() {
        get(this, 'globals').login();
    },
    model(params) {
        return this.store.findRecord('kid', params.kid_id)
    }
});
