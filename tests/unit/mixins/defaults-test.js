import Ember from 'ember';
import DefaultsMixin from '../../../mixins/defaults';
import { module, test } from 'qunit';

module('Unit | Mixin | defaults');

// Replace this with your real tests.
test('it works', function(assert) {
  var DefaultsObject = Ember.Object.extend(DefaultsMixin);
  var subject = DefaultsObject.create();
  assert.ok(subject);
});
