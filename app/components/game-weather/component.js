import Ember from 'ember';
import nfl from 'fantasy-weather/singletons/nfl';

export default Ember.Component.extend({

  // Passed in
  game: null,

  init() {
    this._super(...arguments);

    // Get game and validate
    let game = this.get('game');
    if (_.isBlank(game) ||
        !_.isPlainObject(game) ||
        !_.isString(game, 'home')
    ) {
      throw new Error('You must pass a game in to get weather!');
    }

    let location = nfl.findStadiumByAbbr(game.home);

    let forecastio = this.get('forecastio');
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
  nflSchedule: Ember.inject.service(),

  weather: null

});
