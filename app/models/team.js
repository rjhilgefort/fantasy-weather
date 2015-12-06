import Ember from 'ember';
import computed from 'ember-computed-decorators';
import CoreObject from 'fantasy-weather/models/_core/core-object';
import Stadium from 'fantasy-weather/models/stadium';

let Team = CoreObject.extend({

  _defaults() {
    return {
      name: "",
      abbreviation: "",
      logo: "",
      locationIdentifier: 'city',
      stadium: {}
    };
  },

  _children() {
    return {
      stadium: Stadium
    };
  },

  @computed('locationIdentifier', 'stadium.city', 'stadium.state')
  locationName(locationIdentifier, city, state) {
    let locationName = locationIdentifier;

    // If there's an convention-based identifier, translate it
    if (_.contains(['city', 'state'], locationName)) {
      locationName = this.get(`stadium.${locationIdentifier}`);
    }

    return locationName;
  },

  @computed('locationName', 'name')
  fullName(locationName, name) {
    return `${locationName} ${name}`;
  }

});

Team.reopenClass({});

export default Team;
