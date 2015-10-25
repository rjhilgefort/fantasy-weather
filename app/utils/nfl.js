/**
 * Data class used to interface with nfl data stored on/in it
 *
 * @author rjhilgefort
 *
 * @class nfl
 */
class nfl {

  /**
   * @author rjhilgefort
   *
   * @constructor
   * @return {undefined}
   */
  constructor() {
  }

  /**
   * Nfl teams "database"
   *
   * @author rjhilgefort
   *
   * @static
   * @property teams
   * @return {Object}
  teams: function() {
    return new League({
      bengals: new Team({
        name: "Bengals",
        locationName: "city"
        stadium: new Stadium({
          city: "Chicago",
          state: "Illinois",
          location: {
            lat: 0
            lng: 0
          }
      })
    });
  }
   */

};

export default nfl;

/*

 fortyNiners: {
 name: "49ers",
 locationName: "San Francisco"
 },
 buccaneers': {
 name: "Buccaneers",
 locationName: "Tampa Bay"
 }

 */
