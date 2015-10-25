import Ember from 'ember';

let CoreRoute = Ember.Route.extend({

	beforeModel: function(transition) {
		this._super(...arguments);
  },

  model: function(params, transition) {
    this._super(...arguments);
  },

  /**
   * My preferred setupController default for model/setupController pattern.
   *
   * If you don't want this, just do the default
   * @example Use in your route defs like so...
   *     ```javascript
   *         setupController: (controller, model) {
   *           controller.set('model', model);
   *         }
   *     ```
   * @name setupController
   */
  setupController(controller, model) {
    controller.setProperties(model);
  },

  resetController: function (controller, isExiting, transition) {
    this._super(...arguments);
    // if (isExiting) {}
  }

});


CoreRoute.reopenClass({
});

export default CoreRoute;
