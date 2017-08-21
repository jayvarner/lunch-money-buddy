import Ember from 'ember';
import SecurityHoleMixin from 'lunch-money-budy/mixins/security-hole';
import { module, test } from 'qunit';

module('Unit | Mixin | security hole');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecurityHoleObject = Ember.Object.extend(SecurityHoleMixin);
  let subject = SecurityHoleObject.create();
  assert.ok(subject);
});
