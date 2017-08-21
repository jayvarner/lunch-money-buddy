import Ember from 'ember';

const { Route, get, inject: { service } } = Ember;

export default Route.extend({
    flashMessage: service(),
    // model() {
    //     return this.store.findAll('payment-method');
    // },

    setupController(controller, model) {
        // Call _super for default behavior
        this._super(controller, model);
        // Implement your custom setup after
        this.controllerFor('kid.methods').set('kid', this.modelFor('kid'));
    },

    actions: {
        save(method) {
            const flashMessage = get(this, 'flashMessage');
            method.save().then(() => {
                flashMessage.savedMessage('METHOD SAVED');
                this.transitionTo('kid.methods');
            }, (error) => {
                flashMessage.failedMessage(`ERROR ADDING METHOD: ${error.message}`);
            });
        },

        didTransition() {
            const flashMessage = get(this, 'flashMessage');
            this.controllerFor('kid.methods').set('kid', this.modelFor('kid'));

            if (get(this, 'flashMessage.message')) {
                flashMessage.savedMessage(flashMessage.get('message'));
            }
        }
    }
});
