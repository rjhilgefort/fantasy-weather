import NFL_SCHEDULE_DB from 'fantasy-weather/data/nfl-schedule-db';

import Ember from 'ember';
import _ from 'lodash/lodash';
import moment from 'moment';

let parseTeam = (team) => {
  team = team.toUpperCase();
  team = _.trim(team);
  return team;
};

export default Ember.Service.extend({

  init() {
    this._super(...arguments);
    // console.log(NFL_SCHEDULE_DB.length);
  },

  // _schedule: NFL_SCHEDULE_DB,

  filter(query) {
    return _.filter(NFL_SCHEDULE_DB, query);
  },

  week(week) {
    return this.filter({ week });
  },

  teamLocation(team, location) {
    location = team.toLowerCase();
    let query = {};
    query[location] = parseTeam(team);
    return this.filter(query);
  },

  teamHome(team) {
    return this.teamLocation(team, 'home');
  },

  teamAway(team) {
    return this.teamLocation(team, 'away');
  },

  team(team) {
    team = parseTeam(team);
    return this.filter((game) => {
      return (
        (game.home === team) ||
        (game.away === team)
      );
    });
  }

});
