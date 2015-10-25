import Ember from 'ember';

export default Ember.Mixin.create({

  isBlank(keyName) {
    return Ember.isBlank(this.get(keyName));
  },

  isPresent(keyName) {
    return !this.isBlank(keyName);
  }

});
