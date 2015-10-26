import Ember from 'ember';
// import _ from 'lodash/lodash';

export default Ember.Component.extend({

  team: null,

  init() {
    this._super(...arguments);
    let forecastio = this.get('forecastio');
    let location = this.get('team.stadium.location');

    forecastio.getLocationNow(location)
    // forecastio.getLocationTime(location, "2015-10-26T18:09:00-0400")
    // forecastio.getLocationTime(location, _.now())
    // forecastio.getLocation(location)
      .then((response) => {
        this.set('weather', response);
        return response;
      });
  },

  forecastio: Ember.inject.service(),

  weather: null

});
