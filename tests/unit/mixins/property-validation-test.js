import Ember from 'ember';
import PropertyValidationMixin from '../../../mixins/property-validation';
import { module, test } from 'qunit';

module('Unit | Mixin | property validation');

// Replace this with your real tests.
test('it works', function(assert) {
  var PropertyValidationObject = Ember.Object.extend(PropertyValidationMixin);
  var subject = PropertyValidationObject.create();
  assert.ok(subject);
});
