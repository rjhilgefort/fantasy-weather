import Ember from 'ember';
import ChildClassesMixin from '../../../mixins/child-classes';
import { module, test } from 'qunit';

module('Unit | Mixin | child classes');

// Replace this with your real tests.
test('it works', function(assert) {
  let ChildClassesObject = Ember.Object.extend(ChildClassesMixin);
  let subject = ChildClassesObject.create();
  assert.ok(subject);
});
