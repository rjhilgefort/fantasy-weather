import Ember from 'ember';
import computed from 'ember-computed-decorators';

export default Ember.Controller.extend({

  @computed('weekCurrent')
  firstGame(weekCurrent) {
    return _.first(weekCurrent);
  },

  @computed('firstGame')
  weekNumber(firstGame) {
    return firstGame.week;
  },

  @computed('firstGame')
  weekStart(firstGame) {
    return `${firstGame.month}/${firstGame.day}/${firstGame.year}`;
  }

});
