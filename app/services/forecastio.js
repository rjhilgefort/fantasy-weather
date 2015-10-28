import Ember from 'ember';
import _ from 'lodash/lodash';
import AjaxService from 'ember-ajax/services/ajax';
import moment from 'moment';

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
        console.log(response);
        console.log(moment.unix(response.currently.time).format("MM/DD/YYYY"));
        return response;
      }, (error) => {
        console.error(error);
        throw error;
      });
  },

  getLocation(location, options) {
    return this.request(location.toString(), options);
  },

  getLocationTime(location, time, options) {
    let url = `${location.toString()},${time}`;
    return this.request(url, options);
  },

  getLocationNow(location) {
    let now = moment().format();
    return this.getLocationTime(location.toString(), now);
  },

  getLocationThisSunday(location) {
    let now = moment().format();
    return this.getLocationTime(location.toString(), now);
  }

});
