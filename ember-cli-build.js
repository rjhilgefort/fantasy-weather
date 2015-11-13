/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var CliImport = require('ember-cli-import');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });
  var cliImport = new CliImport(app);

  cliImport.bower('/weather-icons/css/weather-icons.css');
  cliImport.bowerFont('/weather-icons/font/weathericons-regular-webfont',  { destDir: 'font' })

  cliImport.bower('/lodash/lodash.js');
  cliImport.bowerDevProd('/lodash-extras/dist/lodash-extras.js');

  return app.toTree();
};
