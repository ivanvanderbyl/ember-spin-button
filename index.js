/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-spin-button',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/spin.js/spin.js');
  },

  treeForStyles: function() {
    var stylesPath = path.join(__dirname, 'addon');
    var stylesTree = new Funnel(this.treeGenerator(stylesPath), {
      srcDir: './styles',
      destDir: '/app/styles'
    });
    return stylesTree;
  }

};
