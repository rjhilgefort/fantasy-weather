import Ember from 'ember';

export default Ember.Component.extend({
  team: null,

  init() {
    this._super(...arguments);

    let location = this.get('team.stadium.location');

    let forecastio = this.get('forecastio');
    forecastio.getLocationNow(location)
    // forecastio.getLocationTime(location, "2015-10-26T18:09:00-0400")
    // forecastio.getLocationTime(location, _.now())
    // forecastio.getLocation(location)
      .then((response) => {
        this.set('weather', response);
        return response;
      });

    let nflSchedule = this.get('nflSchedule');
    console.log(nflSchedule.team(this.get('team.abbr')));
    this.get('team').set('schedule', nflSchedule.team(this.get('team.abbr')));
  },

  forecastio: Ember.inject.service(),
  nflSchedule: Ember.inject.service(),

  weather: null

});
