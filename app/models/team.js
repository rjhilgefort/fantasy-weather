import Ember from 'ember';
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

  init() {
    this._super(...arguments);

    if (!_.contains(['city', 'state'], this.get('locationIdentifier'))) {
      this.set('locationIdentifier', 'city');
    }

    this.set('stadium', Stadium.create(this.get('stadium')));
  },

  locationName: Ember.computed(
    'locationIdentifier', 'stadium.city', 'stadium.state',
    function() {
      return this.get(`stadium.${this.get('locationIdentifier')}`);
    }
  ),

  fullName: Ember.computed(
    'locationName',
    function() {
      return `${this.get('locationName')} ${this.get('name')}`;
    }
  )

});

Team.reopenClass({
});

export default Team;
