'use strict';

var _ = require('lodash');
var logger = require('./lib/log/logger');
var go = require('go-txt');
var path = require('path');
require('date-util');

var availableModels = ['es6', 'commonjs', 'amd'];
var availableSourceType = [
    'CommonFeature',
    'LogicalMain',
    'LogicalController',
    'Routes'
];

var defaults = {sourceType: 'CommonFeature', model: 'es6'};

var helper = function(options) {
    var opts = _.defaults({}, options, defaults);

    opts.date = new Date().format('mmm d, yyyy');
    try {
        opts.username = process.env.USER || process.env.USERPROFILE.split(path.sep)[2];
    } catch (e) {
        opts.username = '';
    }

    if (availableSourceType.indexOf(opts.sourceType) < 0) {
        logger.warning('The "sourceType" you set is incorrect, available options are [CommonFeature]');
        return;
    }
    if (availableModels.indexOf(opts.model) < 0) {
        logger.warning('The "model" you set is incorrect, available options are [es6, commonjs, amd]');
        return;
    }
    if (!opts.name) {
        logger.warning('You must set "name"');
        return;
    }
    if (!opts.dest) {
        logger.warning('You must set "dest"');
        return;
    }

    var destFileName;
    if (opts.sourceType === 'CommonFeature') {
        destFileName = _.capitalize(opts.name) + '.js';
    } else if (opts.sourceType === 'LogicalController') {
        destFileName = _.capitalize(opts.name) + 'Controller.js';
    } else if (opts.sourceType === 'LogicalMain') {
        destFileName = 'main.js';
    } else if (opts.sourceType === 'Routes') {
        destFileName = 'Routes.js';
    }

    var srcPath = path.resolve(__dirname, 'lib', opts.model, opts.sourceType + '.js');
    var destPath = path.resolve(opts.dest, destFileName);
    go(srcPath, destPath, function(content) {
        return _.template(content, {variable: 'answers'})(opts);
    });
    logger.success('[ ' + destPath + ' ] generated!!');
};

module.exports = helper;
