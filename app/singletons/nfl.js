import NFL from 'fantasy-weather/models/nfl';
import NFL_DB from 'fantasy-weather/utils/nfl-db';
import _ from 'lodash/lodash';

let nfl = NFL.create();

nfl.addTeams(NFL_DB);

// console.log(nfl.get('teams'));

// _.forEach(nfl.get('teams'), (team) => {
//   console.log(team.get('locationName'));
// });

export default nfl;
