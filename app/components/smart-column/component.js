import Ember from 'ember';
import computed, { alias } from 'ember-computed-decorators';

export default Ember.Component.extend({
  numPerRow: 4,
  index: null,
  total: null,

  @computed('index')
  firstInList(index) {
    return (index === 0);
  },

  @computed('index', 'total')
  lastInList(index, total) {
    return (index === (total - 1));
  },

  @computed('numPerRow')
  columnSize(numPerRow) {
    return (12 / numPerRow);
  },

  @computed('index', 'numPerRow')
  positionInRow(index, numPerRow) {
    return (index % numPerRow);
  },

  @computed('positionInRow')
  firstInRow(positionInRow) {
    return (positionInRow === 0);
  },

  @computed('positionInRow', 'numPerRow')
  lastInRow(positionInRow, numPerRow) {
    return (positionInRow === numPerRow);
  },

  @alias('firstInRow') needOpeningTag,

  @computed('lastInRow', 'lastInRow')
  needClosingTag(lastInList, lastInRow) {
    return (lastInRow || lastInList);
  }

});
