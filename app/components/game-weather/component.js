import Ember from 'ember';
import nfl from 'fantasy-weather/singletons/nfl';
import moment from 'moment';
import computed from 'ember-computed-decorators';
import { getDateStringFromGame } from './utils';

export default Ember.Component.extend({

  forecastio: Ember.inject.service(),
  nflSchedule: Ember.inject.service(),

  game: null, // passed in
  weather: null, // setup on init

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

    let forecastio = this.get('forecastio');

    console.log('game', game);

    forecastio.getLocationTime(this.get('stadium'), getDateStringFromGame(game))
      .then((response) => {
        console.log('forecastio-response', response);
        this.set('weather', response);
      });
  },

  @computed('game')
  stadium(game) {
    return nfl.findStadiumByAbbr(game.home);
  },

  @computed('game')
  homeTeam(game) {
    return nfl.findTeamByAbbr(game.home);
  },

  @computed('game')
  awayTeam(game) {
    return nfl.findTeamByAbbr(game.away);
  }

});
