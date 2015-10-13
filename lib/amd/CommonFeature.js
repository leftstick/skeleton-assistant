/**
 *  Defines the <%= answers.name %>
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
define(['lib/FeatureBase'], function(Base) {
    'use strict';

    var Feature = function() {
        Base.call(this, '<%= answers.name %>');
    };

    Feature.prototype = new Base();

    Feature.prototype.constructor = Feature;

    Feature.prototype.beforeStart = function() {};

    Feature.prototype.run = function() {};

    return Feature;
});
