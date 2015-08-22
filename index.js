/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-spin-button',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/spin.js/spin.js');
  }
};
