module.exports = {
  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
    return "application";
  },

  afterInstall: function(options) {
    return this.addBowerPackageToProject('spin.js');
  }
};
