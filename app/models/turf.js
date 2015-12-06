import CoreObject from 'fantasy-weather/models/_core/core-object';

let Turf = CoreObject.extend({

  _defaults() {
    return {
      type: "",
      description: ""
    };
  }

});

Turf.reopenClass({});

export default Turf;
