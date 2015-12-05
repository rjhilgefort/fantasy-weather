import Ember from 'ember';

// mixin validation
export default Ember.Mixin.create({

  init() {
    this._super(...arguments);
    this.defaultProperties(this._defaults());
  },

  _defaults() {
    return {};
  },

  default(key, value) {
    if (this.isBlank(key)) {
      this.set(key, value);
    }
    return value;
  },

  defaultProperties(hash) {
    _.forEach(hash, (value, key) => {
      this.default(key, value);
    });
    return hash;
  }

});
