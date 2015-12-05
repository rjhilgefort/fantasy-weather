import Ember from 'ember';
import CoreRoute from 'fantasy-weather/routes/core';
import nfl from 'fantasy-weather/singletons/nfl';

export default CoreRoute.extend({

  forecastio: Ember.inject.service(),
  nflSchedule: Ember.inject.service(),

  model() {
    let nflSchedule = this.get('nflSchedule');
    let weekCurrent = nflSchedule.weekCurrent();

    let debug = true;
    if (debug) {
      weekCurrent = _.slice(weekCurrent, 0, 3);
    }

    return Ember.RSVP.hash({
      nfl,
      weekCurrent
    });
  }

});
