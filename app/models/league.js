import Ember from 'ember';
import CoreObject from 'fantasy-weather/models/_core/core-object';
import Team from 'fantasy-weather/models/team';
import _ from 'lodash/lodash';

let League = CoreObject.extend({

  // Set defaults and stub out properties
  _defaults() {
    return {
      name: "",
      teams: []
    }
  },

  addTeam(team) {
    let teams = this.get('teams');
    teams.push(Team.create(team));
    return teams;
  },

  addTeams(teams) {
    _.forEach(teams, this.addTeam.bind(this));
    return teams;
  }

});

League.reopenClass({
});

export default League;
