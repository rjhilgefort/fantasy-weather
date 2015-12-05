import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Component.extend({
  tagName: 'img',
  classNames: ['panel-header'],
  attributeBindings: ['url:src'],

  team: null,

  @computed('team')
  url(team) {
    let url;

    if (_.isString(team) && !_.isEmpty(team)) {
      team = team.toLowerCase();
      url = `http://i.nflcdn.com/static/site/7.2/img/logos/teams-gloss-81x54/${team}.png`;
    } else {
      url = 'http://cliparts.co/cliparts/yTk/A5b/yTkA5bxpc.gif';
    }

    return url;
  }

});
