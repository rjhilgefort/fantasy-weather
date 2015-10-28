import Ember from 'ember';
import _ from 'lodash/lodash';

export function weatherIcon(params) {
  let icon = _.first(params);

  // Ensure icon isn't malformed
  if (!_.isString(icon)) { icon = ''; }
  icon = _.trim(icon);

  // Move daytime specifics to beginning of icon
  let match = icon.match(/-(day|night)$/);
  if (!_.isNull(match)) {
    icon = icon.slice(0, -match[0].length);
    icon = `${match[1]}-${icon}`;
  }

  let ret = `<i class="wi wi-${icon}"></li>`;
  return new Ember.Handlebars.SafeString(ret);
}

export default Ember.Helper.helper(weatherIcon);
