import CoreObject from 'fantasy-weather/models/_core/core-object'

let League = CoreObject.extend({
  name: null,
  teams: null
});

League.reopenClass({

  /*
  create(name) {
    return this._super({ name });
  }
  */

});

export default League;
