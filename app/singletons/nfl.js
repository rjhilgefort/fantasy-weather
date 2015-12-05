import NFL_DB from 'fantasy-weather/data/nfl-db';
import NFL from 'fantasy-weather/models/nfl';

let nfl = NFL.create();
nfl.addTeams(NFL_DB);

export default nfl;
