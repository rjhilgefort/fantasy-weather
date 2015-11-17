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

  findTeamByAbbr(abbr) {
    let teams = this.get('teams');
    return _.find(teams, { abbr });
  },

  findStadiumByAbbr(abbr) {
    let team = this.findTeamByAbbr(abbr);
    return _.get(team, 'stadium.location');
  }


});

League.reopenClass({
});

export default League;
