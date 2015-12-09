/**
 *
 *  Routes module expose route information used in <%= answers.name %> feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define(['./partials/<%= answers.name %>.html'], function(tpl) {

    return [
        {
            id: '<%= answers.name %>',
            isDefault: false,
            when: '/<%= answers.name %>',
            controller: '<%= _.capitalize(answers.name) %>Controller',
            template: tpl
        }
    ];
});
