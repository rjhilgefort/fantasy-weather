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
  static teams: {
    '49ers': {
      name: "49ers",
      locationName: "San Francisco",
      location: "",
      roofType: ""
    },
    'bears': {
      name: "Bears",
      stadium: new Stadium({
        identifier: "city",
        city: "Chicago",
        state: "Illinois",
        location: {
          lat: 0
          lng: 0
        }
      })
      locationIdentifier: "city"
      locationName: "Chicago",
      location:,
      roofType: ""
    },
    'bengals: {
      name: "Bengals",
      locationName: "Cincinnati"
    },
    'bills': {
      name: "Bills",
      locationName: "Buffalo"
    },
    'broncos': {
      name: "Broncos",
      locationName: "Denver"
    },
    'browns': {
      name: "Browns",
      locationName: "Cleveland"
    },
    'buccaneers': {
      name: "Buccaneers",
      locationName: "Tampa Bay"
    },
    'chargers': {
      name: "Chargers",
      locationName: "San Diego"
    },
    'colts': {
      name: "Colts",
      locationName: "Indianapolis"
    },
    'cowboys': {
      name: "Cowboys",
      locationName: "Dallas"
    },
    'dolphins': {
      name: "Dolphins",
      locationName: "Miami"
    },
    'falcons': {
      name: "Falcons",
      locationName: "Atlanta"
    },
    'giants': {
      name: "Giants",
      locationName: "New York"
    },
    'jaguars': {
      name: "Jaguars",
      locationName: "Jacksonville"
    },
    'jets': {
      name: "Jets",
      locationName: "New York"
    },
    'lions': {
      name: "Lions",
      locationName: "Detroit"
    },
    'packers': {
      name: "Packers",
      locationName: "Green Bay"
    },
    'panthers': {
      name: "Panthers",
      locationName: "Carolina"
    },
    'patriots': {
      name: "Patriots",
      locationName: "New England"
    },
    'raiders': {
      name: "Raiders",
      locationName: "Oakland"
    },
    'rams': {
      name: "Rams",
      locationName: "St.Louis"
    },
    'ravens': {
      name: "Ravens",
      locationName: "Baltimore"
    },
    'redskins': {
      name: "Redskins",
      locationName: "Washington"
    },
    'saints': {
      name: "Saints",
      locationName: "New Orlean"
    },
    'seahawks': {
      name: "Seahawks",
      locationName: "Seattle"
    },
    'steelers': {
      name: "Steelers",
      locationName: "Pittsburgh"
    },
    'texans': {
      name: "Texans",
      locationName: "Houston"
    },
    'titans': {
      name: "Titans",
      locationName: "Tennesse"
    },
    'vikings': {
      name: "Vikings",
      locationName: "Minnesota"
    }
  }
*/

}

export default nfl;
