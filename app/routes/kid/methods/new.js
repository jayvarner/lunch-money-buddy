import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.createRecord('payment_method');
    },

    actions: {
        setType() {
            let payment_method = this.currentModel.payment_method;
            payment_method.setProperties({methodtype: Ember.$('#newoption option:selected').val()});
        }
    }
});
