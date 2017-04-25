/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-perf',

  included: function(app) {
    this._super.included(app);
    app.import('vendor/monitorjs.min.js');
  }
};
