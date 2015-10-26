import NFL from 'fantasy-weather/models/nfl';
import NFL_DB from 'fantasy-weather/utils/nfl-db';
import NFL_DB_ONE from 'fantasy-weather/utils/nfl-db-1';
import NFL_DB_TWO from 'fantasy-weather/utils/nfl-db-2';
// import _ from 'lodash/lodash';

let nflDbs = [NFL_DB, NFL_DB_ONE, NFL_DB_TWO];
let debug = 2;

let nfl = NFL.create();
nfl.addTeams(nflDbs[debug]);

// console.log(nfl.get('teams'));

// _.forEach(nfl.get('teams'), (team) => {
//   console.log(team.get('locationName'));
// });

export default nfl;
