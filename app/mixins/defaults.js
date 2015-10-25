import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Mixin.create({

  init() {
    this._super(...arguments);
    this.defaultProperties(this._defaults());
  },

  _defaults() {
    return {};
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
