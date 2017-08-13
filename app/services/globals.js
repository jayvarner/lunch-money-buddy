import Ember from 'ember';

const { Service, set } = Ember;

export default Service.extend({

    init() {
        this._super(...arguments);
        this.setProperties({
            authenticated: false
        });
    },

    login() {
        set(this, 'authenticated', true);
    },

    logout() {
        set(this, 'authenticated', false);
    }

});
