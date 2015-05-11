/* jshint node: true */
'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-spin-button',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  treeForStyles: function() {
    var stylesheetPath = path.resolve(__dirname, 'addon', 'spin-button');
    var stylesheetsTree = new Funnel(this.treeGenerator(stylesheetPath), {
      srcDir: '/assets/stylesheets',
      destDir: '/app/styles'
    });
    return stylesheetsTree;
  },

  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/spin.js/spin.js');
  },
};
