import NFL_DB from 'fantasy-weather/data/nfl-db';
import NFL_DB_ONE from 'fantasy-weather/data/nfl-db-1';
import NFL_DB_TWO from 'fantasy-weather/data/nfl-db-2';

import NFL from 'fantasy-weather/models/nfl';

let nflDbs = [NFL_DB, NFL_DB_ONE, NFL_DB_TWO];
let debug = 0;

let nfl = NFL.create();
nfl.addTeams(nflDbs[debug]);

export default nfl;
