import Ember from 'ember';
import _ from 'lodash/lodash';
import defaults from 'fantasy-weather/mixins/defaults';

export default Ember.Component.extend(defaults, {
  team: null,

  url: Ember.computed('team', function() {
    let team = this.get('team');
    let url;

    if (_.isString(team) && !_.isEmpty(team)) {
      team = team.toLowerCase();
      url = `http://i.nflcdn.com/static/site/7.2/img/logos/teams-gloss-81x54/${team}.png`;
    } else {
      url = 'http://cliparts.co/cliparts/yTk/A5b/yTkA5bxpc.gif';
    }

    return url;
  })

});
