import Ember from 'ember';

const { Mixin, get, inject: { service } } = Ember;

export default Mixin.create({
    globals: service(),
    actions: {
        willTransition() {
            get(this, 'globals').login();
        }
    }
});
