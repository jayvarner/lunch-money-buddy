import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        if ('1' === this.store.peekAll('kid').content[0].id) {
            return this.store.findAll('brestriction');
        } else {
            return this.store.findAll('hrestriction');
        }
    }
});
