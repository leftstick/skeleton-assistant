'use strict';
var chalk = require('chalk');

var logger = {
    info: function(){
        var args = Array.prototype.slice.apply(arguments);
        console.log.apply(null, args);
    },
    success: function(){
        var args = Array.prototype.slice.apply(arguments);
        console.log(chalk.green.apply(null, args));
    },
    warning: function(){
        var args = Array.prototype.slice.apply(arguments);
        console.log(chalk.yellow.apply(null, args));
    },
    error: function(){
        var args = Array.prototype.slice.apply(arguments);
        console.log(chalk.red.apply(null, args));
    }
};

module.exports = logger;
