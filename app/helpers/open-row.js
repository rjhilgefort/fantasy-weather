import Ember from 'ember';

export function openRow(params) {
  let ret = '';
  if (_.first(params) === true) {
    ret = `<div class="row">`;
  }
  return new Ember.Handlebars.SafeString(ret);
}

export default Ember.Helper.helper(openRow);
