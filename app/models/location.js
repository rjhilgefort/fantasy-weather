import Ember from 'ember';
import CoreObject from 'fantasy-weather/models/_core/core-object'
import _ from 'lodash/lodash'

let Location = CoreObject.extend({

  _defaults() {
    return {
      lat: 0,
      lng: 0
    }
  },

  toString() {
    return `${this.get('lat')},${this.get('lng')}`;
  }

});

Location.reopenClass({
});

export default Location;
