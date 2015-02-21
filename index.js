/* jshint node: true */
'use strict';
var path = require('path');
module.exports = {
  name: 'ember-spin-button',

  treeForStyles: function() {
    var stylesheetPath = path.join('app', 'styles');
    var stylesheetTree = this.pickFiles(this.treeGenerator(stylesheetPath), {
      srcDir: '/',
      destDir: '/app/styles'
    });
    return stylesheetTree;
  }

  // included: function(app) {
  //   app.import('app/styles/app.scss');
  // },
};
