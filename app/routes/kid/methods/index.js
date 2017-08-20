import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        didTransition() {
            this.controllerFor('kid.methods.index').set('kid', this.modelFor('kid'));
        },

        delete(method) {
            const d = confirm(`Delete ${method.get('methodtype')} ending in **${method.get(`lastFour`)}`);
            if (d === true) {
                method.deleteRecord();
            }
        }
    }
});
