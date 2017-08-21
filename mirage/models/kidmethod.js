import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
    kid: belongsTo(),
    method: belongsTo()
});
