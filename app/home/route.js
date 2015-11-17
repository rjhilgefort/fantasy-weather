import Ember from 'ember';
import CoreRoute from 'fantasy-weather/routes/core';
import nfl from 'fantasy-weather/singletons/nfl';

export default CoreRoute.extend({

  forecastio: Ember.inject.service(),
  nflSchedule: Ember.inject.service(),

  model() {
    let nflSchedule = this.get('nflSchedule');
    // let weekCurrent = nflSchedule.weekCurrent();
    let weekCurrent = [_.last(nflSchedule.weekCurrent())];
    console.log(weekCurrent);
    return Ember.RSVP.hash({ nfl, weekCurrent });
  }

});
