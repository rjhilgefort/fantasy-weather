import Ember from 'ember';

export default Ember.Component.extend({
  numPerRow: 4,
  index: null,
  total: null,

  firstInList: Ember.computed('index', function() {
    let index = this.get('index');
    return (index === 0);
  }),

  lastInList: Ember.computed('index', function() {
    let index = this.get('index');
    let total = this.get('total');
    return (index === (total - 1));
  }),

  columnSize: Ember.computed('numPerRow', function() {
    let numPerRow = this.get('numPerRow');
    return (12 / numPerRow);
  }),

  positionInRow: Ember.computed('index', 'numPerRow', function() {
    let index = this.get('index');
    let numPerRow = this.get('numPerRow');
    return (index % numPerRow);
  }),

  firstInRow: Ember.computed('positionInRow', function() {
    let positionInRow = this.get('positionInRow');
    return (positionInRow === 0);
  }),

  lastInRow: Ember.computed('positionInRow', 'numPerRow', function() {
    let positionInRow = this.get('positionInRow');
    let numPerRow = this.get('numPerRow');
    return (positionInRow === numPerRow);
  }),

  needOpeningTag: Ember.computed.alias('firstInRow'),

  needClosingTag: Ember.computed('lastInList', 'lastInRow', function() {
    let lastInList = this.get('lastInList');
    let lastInRow = this.get('lastInRow');
    return (lastInRow || lastInList);
  })

});
