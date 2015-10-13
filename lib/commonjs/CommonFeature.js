/**
 *  Defines the <%= answers.name %>
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
var Base = require('lib/FeatureBase');

var Feature = function() {
    Base.call(this, '<%= answers.name %>');
};

Feature.prototype = new Base();

Feature.prototype.constructor = Feature;

Feature.prototype.beforeStart = function() {};

Feature.prototype.run = function() {};

module.exports = Feature;
