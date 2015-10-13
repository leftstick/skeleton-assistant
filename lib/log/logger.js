'use strict';
var chalk = require('chalk');

var logger = {
    info: function() {
        var args = Array.prototype.slice.apply(arguments);
        console.log.apply(undefined, args);
    },
    success: function() {
        var args = Array.prototype.slice.apply(arguments);
        console.log(chalk.green.apply(undefined, args));
    },
    warning: function() {
        var args = Array.prototype.slice.apply(arguments);
        console.log(chalk.yellow.apply(undefined, args));
    },
    error: function() {
        var args = Array.prototype.slice.apply(arguments);
        console.log(chalk.red.apply(undefined, args));
    }
};

module.exports = logger;
