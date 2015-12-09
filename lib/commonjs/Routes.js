/**
 *
 *  Routes module expose route information used in <%= answers.name %> feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 **/
'use strict';
var tpl = require('./partials/<%= answers.name %>.html');

module.exports = [
    {
        id: '<%= answers.name %>',
        isDefault: false,
        when: '/<%= answers.name %>',
        controller: '<%= _.capitalize(answers.name) %>Controller',
        template: tpl
    }
];
