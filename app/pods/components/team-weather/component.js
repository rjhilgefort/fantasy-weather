import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Component.extend({

  forecastio: Ember.inject.service(),

  init() {
    this._super(...arguments);
    let location = this.get('team.stadium.location');
    // this.get('forecastio').requestLocationTime(location, _.now())
    this.get('forecastio').requestLocation(location)
      .then((response) => {
        console.log(response);
        return response;
      });
  },

  team: null

});
