import NFL_SCHEDULE_DB from 'fantasy-weather/data/nfl-schedule-db';

import Ember from 'ember';
import moment from 'moment';
import computed from 'ember-computed-decorators';

const NFL_SEASON_FIRST_TUESDAY = new Date('09-08-2015');

export default Ember.Service.extend({

  init() {
    this._super(...arguments);
    // console.log(NFL_SCHEDULE_DB.length);
  },

  // _schedule: NFL_SCHEDULE_DB,


  /**
   * Private variable used to house the tuesdays array
   *
   * @private
   * @property __scheduleTuesdays
   * @type Array
   */
  __scheduleTuesdays: null,

  /**
   * Tuesdays array computed property reference
   * "lazy generate" the tuesdays of the nfl schedule (wait for some caller to ask for it)
   *
   * @property _scheduleTuesdays
   * @type Array
   */
  @computed('__scheduleTuesdays')
  _scheduleTuesdays(__scheduleTuesdays) {
    // If value has not been populated yet- build it
    if (_.isBlank(__scheduleTuesdays)) {
      this.set('__scheduleTuesdays', generateTuesdaysFromDate(NFL_SEASON_FIRST_TUESDAY));
    }
    return __scheduleTuesdays;
  },

  // Filter alias
  filter(query) {
    return _.filter(NFL_SCHEDULE_DB, query);
  },

  // Get week for all teams
  week(week) {
    return this.filter({ week });
  },

  // Get week number from date
  weekNumberFromDate(date) {
    if (_.isDate(date)) date = moment(date);

    // TODO: MOVE TO TESTS
    if (false) {
      previousTuesday(moment('2015-11-17')); // Tuesday
      previousTuesday(moment('2015-11-18')); // Wednesday
      previousTuesday(moment('2015-11-19')); // Thursday
      previousTuesday(moment('2015-11-20')); // Friday
      previousTuesday(moment('2015-11-21')); // Saturday
      previousTuesday(moment('2015-11-22')); // Sunday
      previousTuesday(moment('2015-11-23')); // Monday
    }

    // Get previous Tuesday
    previousTuesday(date);

    let week;
    let tuesdays = _.clone(this.get('_scheduleTuesdays'));

    // Stop when `week` has been determined
    while(!_.isNumber(week)) {
      let middleIndex = _.floor(tuesdays.length / 2);
      let middle = tuesdays[middleIndex];

      if (date.isSame(middle.tuesday, 'day')) {
        // Found the week
        week = middle.week;
      } else if (date.isAfter(middle.tuesday)) {
        // Take next middle index, to the end
        tuesdays = tuesdays.slice(middleIndex + 1);
      } else {
        // Take start, to middle index
        tuesdays = tuesdays.slice(0, middleIndex);
      }
    }

    return week;
  },

  weekNumberCurrent() {
    return this.weekNumberFromDate(moment());
  },

  // Get week for all teams by date
  weekFromDate(date) {
    return this.week(this.weekNumberFromDate(date));
  },

  // Get week for current date/time
  weekCurrent() {
    return this.weekFromDate(moment());
  },

  // Get team location
  teamLocation(team, location) {
    location = team.toLowerCase();
    let query = {};
    query[location] = parseTeam(team);
    return this.filter(query);
  },

  // Get team home games
  teamHome(team) {
    return this.teamLocation(team, 'home');
  },

  // Get team away games
  teamAway(team) {
    return this.teamLocation(team, 'away');
  },

  // Get team games
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

let parseTeam = (team) => {
  team = _.ensureString(team);
  team = team.toUpperCase();
  team = _.trim(team);
  return team;
};

let previousTuesday = (date) => {
  // Determine what the "current week" is
  let startOfWeek = date.clone().startOf('week');
  let diff = date.diff(startOfWeek, 'days');
  if (diff < 2) {
    date.subtract(diff + 1, 'days');
  }

  // Get tuesday of the "current week"
  date.day(2);

  // if you want it for some reason- it will already have been modified
  return date;
};

let generateTuesdaysFromDate = (dateString) => {
  let ret = [{
    week: 1,
    tuesday: moment(dateString)
  }];

  for (let i = 1; ret.length < 17; i++) {
    ret.push({
      week: i + 1,
      tuesday: ret[i-1].tuesday.clone().add(7, 'days')
    });
  }

  return ret;
};
