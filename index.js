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

var nameGenerator = {
    CommonFeature: function(raw){
        return _.capitalize(raw) + '.js';
    },
    LogicalController: function(raw){
        return _.capitalize(raw) + 'Controller.js';
    },
    LogicalMain: function(raw){
        return 'main.js';
    },
    Routes: function(raw){
        return 'Routes.js';
    }
};

var getUsername = function(){
    try {
        return process.env.USER || process.env.USERPROFILE.split(path.sep)[2];
    }catch (e){
        return '';
    }
};

var validate = function(opts){
    if (availableSourceType.indexOf(opts.sourceType) < 0){
        return logger.warning('The "sourceType" you set is incorrect, available options are [CommonFeature]');
    }
    if (availableModels.indexOf(opts.model) < 0){
        return logger.warning('The "model" you set is incorrect, available options are [es6, commonjs, amd]');
    }
    if (!opts.name){
        return logger.warning('You must set "name"');
    }
    if (!opts.dest){
        return logger.warning('You must set "dest"');
    }
    return true;
};

var defaults = { sourceType: 'CommonFeature', model: 'es6' };

var helper = function(options){
    var opts = _.defaults({ }, options, defaults);

    opts.date = new Date().format('mmm d, yyyy');
    opts.username = getUsername();

    if (!validate(opts)){
        return;
    }

    var destFileName = nameGenerator[opts.sourceType](opts.name);

    var srcPath = path.resolve(__dirname, 'lib', opts.model, opts.sourceType + '.js');
    var destPath = path.resolve(opts.dest, destFileName);
    go(srcPath, destPath, function(content){
        return _.template(content, { variable: 'answers' })(opts);
    });
    logger.success('[ ' + destPath + ' ] generated!!');
};

module.exports = helper;
