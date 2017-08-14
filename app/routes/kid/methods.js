import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        save(method) {
            method.then((m) => {
                m.save();
            })
        }
    }
});
