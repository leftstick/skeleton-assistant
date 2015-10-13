'use strict';

var _ = require('lodash');
var logger = require('./lib/log/logger');
var go = require('go-txt');
var path = require('path');
require('date-util');

var availableModels = ['es6', 'commonjs', 'amd'];
var availableSourceType = ['CommonFeature'];

var defaults = {
    enableInquirer: false,
    sourceType: 'CommonFeature',
    model: 'es6'
};

var helper = function(options) {
    var opts = _.defaults({}, options, defaults);
    if (!opts.name) {
        logger.warning('You must set "name"');
        return;
    }
    if (!opts.dest) {
        logger.warning('You must set "dest"');
        return;
    }
    if (availableModels.indexOf(opts.model) < 0) {
        logger.warning('The "model" you set is incorrect, available options are [es6, commonjs, amd]');
        return;
    }
    if (availableSourceType.indexOf(opts.sourceType) < 0) {
        logger.warning('The "sourceType" you set is incorrect, available options are [CommonFeature]');
        return;
    }

    opts.date = new Date().format('mmm d, yyyy');
    try {
        opts.username = process.env.USER || process.env.USERPROFILE.split(path.sep)[2];
    } catch (e) {
        opts.username = '';
    }
    go(path.resolve(__dirname, 'lib', opts.model, opts.sourceType + '.js'), path.resolve(opts.dest, _.capitalize(opts.name) + '.js'), function(content) {
        return _.template(content, {variable: 'answers'})(opts);
    });
};

module.exports = helper;
