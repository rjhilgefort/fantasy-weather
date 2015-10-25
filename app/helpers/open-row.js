import Ember from 'ember';
import _ from 'lodash/lodash';

export function openRow(params) {
  let ret = '';
  if (_.first(params) === true) {
    ret = `<div class="row">`;
  }
  return new Ember.Handlebars.SafeString(ret);
}

export default Ember.Helper.helper(openRow);
