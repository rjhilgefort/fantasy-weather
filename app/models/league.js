import CoreObject from 'fantasy-weather/models/_core/core-object';
import Team from 'fantasy-weather/models/team';

let League = CoreObject.extend({

  // Set defaults and stub out properties
  _defaults() {
    return {
      name: "",
      teams: []
    };
  },

  addTeam(team) {
    let teams = this.get('teams');
    teams.push(Team.create(team));
    return teams;
  },

  addTeams(teams) {
    _.forEach(teams, this.addTeam.bind(this));
    return teams;
  },

  findTeamByAbbr(abbreviation) {
    let teams = this.get('teams');
    return _.find(teams, { abbreviation });
  },

  findStadiumByAbbr(abbreviation) {
    let team = this.findTeamByAbbr(abbreviation);
    return _.get(team, 'stadium.location');
  }

});

League.reopenClass({});

export default League;
