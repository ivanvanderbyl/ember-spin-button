/* globals define, Spinner */

(function () {

  function generateModule(name, values) {
    define(name, [], function () {
      'use strict';

      return values;
    });
  }

  generateModule('spinner', { default: Spinner });
})();
