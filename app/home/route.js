import Ember from 'ember';
import CoreRoute from 'fantasy-weather/routes/core';
import nfl from 'fantasy-weather/singletons/nfl';

export default CoreRoute.extend({

  nflSchedule: Ember.inject.service(),

  model() {

    return Ember.RSVP.hash({
      nfl,
      schedule: this.get('nflSchedule'),
    });
  }

});
