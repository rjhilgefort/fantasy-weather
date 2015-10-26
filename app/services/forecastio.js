import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({

  _baseUrl: 'https://api.forecast.io/forecast',
  _apiKey: '4026230ad58e89e094134b200ddb843f',

  host: Ember.computed('_baseUrl', 'apikey', function() {
    let _baseUrl = this.get('_baseUrl');
    let _apiKey = this.get('_apiKey');
    return `${_baseUrl}/${_apiKey}`;
  })

});
