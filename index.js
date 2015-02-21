/* jshint node: true */
'use strict';
var path = require('path');
module.exports = {
  name: 'ember-spin-button',

  treeForStyles: function() {
    var stylesheetPath = path.resolve(__dirname, 'addon', 'spin-button');
    var stylesheetTree = this.pickFiles(this.treeGenerator(stylesheetPath), {
      srcDir: '/styles',
      destDir: '/app/styles'
    });
    return stylesheetTree;
  },

  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/spin.js/spin.js');
  },
};
