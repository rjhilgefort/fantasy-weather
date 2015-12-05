import Ember from 'ember';
import CoreObject from 'fantasy-weather/models/_core/core-object';
import Stadium from 'fantasy-weather/models/stadium';
import computed from 'ember-computed-decorators';

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

  init() {
    this._super(...arguments);

    if (!_.contains(['city', 'state'], this.get('locationIdentifier'))) {
      this.set('locationIdentifier', 'city');
    }

    this.set('stadium', Stadium.create(this.get('stadium')));
  },

  @computed('locationIdentifier', 'stadium.city', 'stadium.state')
  locationName(locationIdentifier, city, state) {
    return this.get(`stadium.${locationIdentifier}`);
  },

  @computed('locationName', 'name')
  fullName(locationName, name) {
    return `${locationName} ${name}`;
  }

});

Team.reopenClass({
});

export default Team;
