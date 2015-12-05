import CoreObject from 'fantasy-weather/models/_core/core-object';
import Location from 'fantasy-weather/models/location';
import Turf from 'fantasy-weather/models/turf';

let Stadium = CoreObject.extend({

  _defaults() {
    return {
      city: "",
      state: "",
      name: "",
      location: {},
      roof: "",
      turf: {},
    };
  },

  _children() {
    return {
      location: Location,
      turf: Turf
    };
  }

});

Stadium.reopenClass({});

export default Stadium;
