import Ember from 'ember';

export default Ember.Component.extend({

  forecastio: Ember.inject.service(),

  init() {
    this._super(...arguments);
    this.get('forecastio').request('39.095442,-84.516039', { dataType: "jsonp" });
  },

  team: null

});
