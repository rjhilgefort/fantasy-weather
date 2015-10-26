import Ember from 'ember';
import _ from 'lodash/lodash';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({

  _baseUrl: 'https://api.forecast.io/forecast',
  _apiKey: '4026230ad58e89e094134b200ddb843f',

  host: Ember.computed('_baseUrl', 'apikey', function() {
    let _baseUrl = this.get('_baseUrl');
    let _apiKey = this.get('_apiKey');
    return `${_baseUrl}/${_apiKey}`;
  }),

  request(url, options) {
    if (!_.isPlainObject(options)) options = {};
    options.dataType = "jsonp";

    return this._super(url, options)
      .then((response) => {
        return response;
      }, (error) => {
        console.error(error);
        throw error;
      });
  },

  requestLocation(location, options) {
    return this.request(location.toString(), options);
  },

  requestLocationTime(location, time, options) {
    let url = `${location.toString()},${_.parseInt(time)}`;
    return this.request(url, options);
  }

});
