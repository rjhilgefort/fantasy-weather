import Ember from 'ember';
import _ from 'lodash/lodash';

let CoreObject = Ember.Object.extend({

  init() {
    this._super(...arguments);
    this.defaultProperties(this._defaults());
  },

  _defaults() {
    return {};
  },

  isBlank(keyName) {
    return Ember.isBlank(this.get(keyName));
  },

  isPresent(keyName) {
    return !this.isBlank(keyName);
  },

  default(keyName, value) {
    if (this.isBlank(keyName)) {
      this.set(keyName, value);
    }
    return value;
  },

  defaultProperties(hash) {
    _.forEach(hash, (value, keyName) => {
      this.default(keyName, value);
    });
    return hash;
  }

});

CoreObject.reopenClass({
});

export default CoreObject;
