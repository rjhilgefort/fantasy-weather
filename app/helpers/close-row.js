import Ember from 'ember';
import _ from 'lodash/lodash';

export function closeRow(params) {
  let ret = '';
  if (_.first(params) === true) {
    ret = `</div>`;
  }
  return new Ember.Handlebars.SafeString(ret);
}

export default Ember.Helper.helper(closeRow);
