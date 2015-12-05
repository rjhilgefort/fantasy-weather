import Ember from 'ember';
import defaults from 'fantasy-weather/mixins/defaults';
import propertyValidation from 'fantasy-weather/mixins/property-validation';
import childClasses from 'fantasy-weather/mixins/child-classes';

let CoreObject = Ember.Object.extend(
  defaults, propertyValidation, childClasses,
  {}
);

CoreObject.reopenClass({});

export default CoreObject;
