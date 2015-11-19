/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var CliImport = require('ember-cli-import');
var decoratorGuards = require('broccoli-es7-decorator-jshint-guards');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      optional: ['es7.decorators']
    }
  });
  var cliImport = new CliImport(app);

  cliImport.bower('/weather-icons/css/weather-icons.css');
  cliImport.bowerFont('/weather-icons/font/weathericons-regular-webfont',  { destDir: 'font' })

  cliImport.bowerDevProd('/lodash/lodash.js');
  cliImport.bowerDevProd('/lodash-extras/dist/lodash-extras.js');

  var tree = app.toTree();
  tree = decoratorGuards(tree, { files: ['**/*.js'] });
  return tree;
};
