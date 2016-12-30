/*jshint node:true*/
module.exports = {
  description: 'ember-code-highlight',

  normalizeEntityName: function () {},

  afterInstall: function (/* options */) {
    return this.addBowerPackageToProject('highlightjs');
  }
};
