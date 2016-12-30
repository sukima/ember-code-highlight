/* jshint node: true */
'use strict';
var join = require('path').join;

var DEFAULT_OPTIONS = {
  style: 'tomorrow'
};

module.exports = {
  name: 'ember-code-highlight',

  included: function included(app) {
    this._super.included(app);
    var customOptions = app.options['emberCodeHighlight'];
    var options = Object.assign({}, DEFAULT_OPTIONS, customOptions);
    var hljsPath = join(app.bowerDirectory, 'highlightjs');

    app.import(join(hljsPath, 'styles', options.style + '.css'));
    app.import(join(hljsPath, 'highlight.pack.js'));
  }
};
