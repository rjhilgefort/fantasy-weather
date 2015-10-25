import Ember from 'ember';

export default Ember.Component.extend({
  team: null,

  url: Ember.computed('team', function() {
    let team = this.get('team').toLowerCase();
    return `http://i.nflcdn.com/static/site/7.2/img/logos/teams-gloss-81x54/${team}.png`;
  })

});
