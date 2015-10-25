/**
 * Class description
 *
 * @author yourName
 *
 * @class <%= camelizedModuleName %>
 */
class <%= camelizedModuleName %> {

  /**
   * description
   *
   * @author yourName
   *
   * @constructor
   * @param {Object} params
   *     @param {Type} [optional='default']: description
   * @return {undefined}
   */
  constructor(params) {
    let defaults = {
      optional: "default"
    };

    // Merge passed in params over defaults
    params = _.merge({}, defaults, params);

    // Set params on instance
    _.merge(this, params);
  }

  /**
   * description
   *
   * @author yourName
   *
   * @private
   * @name _privateInstanceFunction
   * @return {undefined}
   */
  _privateInstanceFunction() {
    return true;
  }

  /**
   * description
   *
   * @author yourName
   *
   * @name publicInstanceFunction
   * @return {undefined}
   */
  publicInstanceFunction() {
    return true;
  }

  /**
   * description
   *
   * @author yourName
   *
   * @static
   * @name staticPublicFunction
   * @return {undefined}
   */
  static staticPublicFunction() {
    return true;
  }

}

export default <%= camelizedModuleName %>;
