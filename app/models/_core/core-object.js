import Ember from 'ember';
import defaults from 'fantasy-weather/mixins/defaults';
import propertyValidation from 'fantasy-weather/mixins/property-validation';

let CoreObject = Ember.Object.extend(defaults, propertyValidation, {

});

CoreObject.reopenClass({
});

export default CoreObject;
