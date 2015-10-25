import Ember from 'ember';
import CoreObject from 'fantasy-weather/models/_core/core-object'
import _ from 'lodash/lodash'
import Location from 'fantasy-weather/models/location'

let Stadium = CoreObject.extend({

  _defaults() {
    return {
      city: "",
      state: "",
      location: {},
      roofType: ""
    }
  },

  init() {
    this._super(...arguments);

    this.set('location', Location.create(this.get('location')));
  }


});

Stadium.reopenClass({
});

export default Stadium;