/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  var importFont = function(font, options) {
    var extensions = ['eot', 'svg', 'ttf', 'woff', 'woff2'];
    extensions.forEach(function(extension) {
      app.import(font + '.' + extension, options);
    });
  };

  app.import(app.bowerDirectory + '/weather-icons/css/weather-icons.css');
  importFont(app.bowerDirectory + '/weather-icons/font/weathericons-regular-webfont',  { destDir: 'font' })

  app.import(app.bowerDirectory + '/lodash/lodash.js');
  app.import(app.bowerDirectory + '/lodash-extras/dist/lodash-extras.js');

  return app.toTree();
};
