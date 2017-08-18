import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            method: this.store.createRecord('method'),
            types: this.store.peekAll('methodtype')
        });
    },

    actions: {
        setType(typId, method) {
            console.log('this', this);
            console.log('typeId', this.get('typeId'));
            console.log('method', method);
            // console.log('method', method);
            // let typeId = this.get('typeId');
            let type = this.store.peekRecord('methodtype', event.target.value);
            console.log('type', type);
            method.methodtype = type;
        }
    }
});
