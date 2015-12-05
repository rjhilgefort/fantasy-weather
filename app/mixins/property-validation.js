import Ember from 'ember';

export default Ember.Mixin.create({

  isBlank(key) {
    return Ember.isBlank(this.get(key));
  },

  isPresent(key) {
    return !this.isBlank(key);
  }

});
