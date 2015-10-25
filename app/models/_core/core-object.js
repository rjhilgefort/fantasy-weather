import Ember from 'ember';
import _ from 'lodash/lodash';
import defaults from 'fantasy-weather/mixins/defaults';

let CoreObject = Ember.Object.extend(defaults, {

  isBlank(keyName) {
    return Ember.isBlank(this.get(keyName));
  },

  isPresent(keyName) {
    return !this.isBlank(keyName);
  }

});

CoreObject.reopenClass({
});

export default CoreObject;
