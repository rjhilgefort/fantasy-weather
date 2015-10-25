import Ember from 'ember';
import CoreRoute from 'fantasy-weather/routes/core';
import nfl from 'fantasy-weather/singletons/nfl'

export default CoreRoute.extend({

  model() {
    return Ember.RSVP.hash({ nfl });
  }

});
