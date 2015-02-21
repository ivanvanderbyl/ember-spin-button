module.exports = {
  afterInstall: function(options) {
    return this.addBowerPackageToProject('spin.js');
  }
};
