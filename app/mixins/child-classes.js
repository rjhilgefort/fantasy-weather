import Ember from 'ember';

export default Ember.Mixin.create({

  init() {
    this._super(...arguments);
    this._instantiateChildren(this._children());
  },

  _children() {
    return {};
  },

  _instantiate(key, Klass) {
    let instance = Klass.create(this.get(key));
    this.set(key, instance);
    return instance;
  },

  _instantiateChildren(hash) {
    _.forEach(hash, (Klass, key) => {
      this._instantiate(key, Klass);
    });
  }

});
