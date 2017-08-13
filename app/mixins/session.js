import Ember from 'ember';

const { Mixin, get, inject: { service } } = Ember;

export default Mixin.create({
    globals: service(),
    actions: {
        login() {
            get(this, 'globals').login();
            this.transitionTo('index');
        },

        logout() {
            get(this, 'globals').logout();
        }
    }
});
