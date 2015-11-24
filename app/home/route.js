import Ember from 'ember';
import CoreRoute from 'fantasy-weather/routes/core';
import nfl from 'fantasy-weather/singletons/nfl';

export default CoreRoute.extend({

  forecastio: Ember.inject.service(),
  nflSchedule: Ember.inject.service(),

  model() {
    let nflSchedule = this.get('nflSchedule');

    // let weekCurrent = nflSchedule.weekCurrent();
    console.log('weeknumbercurrent', nflSchedule.weekNumberCurrent());
    console.log('weekcurrent', nflSchedule.weekCurrent());
    let weekCurrent = _.filter(nflSchedule.weekCurrent(), { home: "CIN" });
    console.log('findWeekCurrent', weekCurrent);

    return Ember.RSVP.hash({ nfl, weekCurrent });
  }

});
