import Ember from 'ember';
import nfl from 'fantasy-weather/singletons/nfl';
import moment from 'moment';

export default Ember.Component.extend({

  forecastio: Ember.inject.service(),
  nflSchedule: Ember.inject.service(),

  game: null, // passed in
  weather: null,

  init() {
    this._super(...arguments);

    // Get game and validate
    let game = this.get('game');
    if (
      _.isBlank(game) || !_.isPlainObject(game) ||
      !_.isString(game, 'home')
    ) {
      throw new Error('You must pass a game in to get weather!');
    }

    let location = nfl.findStadiumByAbbr(game.home);
    let gameTime = getDateStringFromGame(game);

    let forecastio = this.get('forecastio');
    forecastio.getLocationTime(location, gameTime)
      .then((response) => this.set('weather', response));
  }

});

/**
 * Returns an ISO time format that forecastio likes
 * https://developer.forecast.io/docs/v2#time_call
 *
 * @name getDateStringFromGame
 * @param {Object} game
 *   @param {Number} year:
 *   @param {Number} month:
 *   @param {Number} day:
 *   @param {String} time:
 */
let getDateStringFromGame = ({ year, month, day, time }) => {
  if (
    !_.isNumber(year) || !_.isNumber(month) ||
    !_.isNumber(day) || !_.isString(time)
  ) {
    throw new Error('Not enough info on `game` object to get time');
  }

  let inputFormat = 'YYYY-MM-DD H:mm';
  let dateString = moment(`${year}-${month}-${day} ${time}`, inputFormat);
  if (!dateString.isValid()) throw new Error('game time could not be determined');

  // Format: [YYYY]-[MM]-[DD]T[HH]:[MM]:[SS]
  // let outputFormat = 'YYYY-MM-DDTHH:MM:SS'
  return dateString.format();
};
