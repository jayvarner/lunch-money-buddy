import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('lunch');
    },

    afterMode() {
        Ember.$('.is-active').click();
    },

    setupController(controller, model) {
        // Call _super for default behavior
        this._super(controller, model);
        // Implement your custom setup after
        this.controllerFor('kid.lunches').set('kid', this.modelFor('kid'));
    },

    actions: {
        didTransition() {
            // NEED TO ACTIVATE THIS
            Ember.$('.is-active').click();
        },

        addFavorite(event) {
            // console.log('event', event.target);
            // console.log('this', this);
            Ember.$(event.target).css('color', 'red');
            // const k = this.get('kid');
            // const l = this.get('lunch');

            // l.get('kidIds').push(k);
            // console.log('this.event.target', event);
        }
    }
});
