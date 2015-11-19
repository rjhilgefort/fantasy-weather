#!/bin/bash

# Intended to be run from root of project

rm -rf node_modules
rm -rf bower_components
npm install
# bower install # runs after npm install

npm link ember-cli-import
bower link lodash-extras
