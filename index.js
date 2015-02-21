/* jshint node: true */
'use strict';
var path = require('path');
module.exports = {
  name: 'ember-spin-button',

  treeForStyles: function() {
    var stylesheetPath = path.resolve(__dirname, 'vendor');
    console.log(stylesheetPath)
    var stylesheetTree = this.pickFiles(this.treeGenerator(stylesheetPath), {
      srcDir: '/spin-button-styles/',
      destDir: '/app/styles'
    });
    return stylesheetTree;
  }

  included: function(app) {
    this._super.included(app);
    // app.import('app/styles/app.scss');
    app.import(app.bowerDirectory + '/spin.js/spin.js');
  },
};
