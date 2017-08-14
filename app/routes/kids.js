import Ember from 'ember';
import SessionMixin from '../mixins/session';

const { Route, get, inject: { service } } = Ember;

export default Route.extend(SessionMixin, {
    globals: service(),
    beforeModel() {
        get(this, 'globals').login();
    },

    model() {
        return this.store.findAll('kid');
    }
});
