/**
 *
 *  Routes module expose route information used in <%= answers.name %> feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import tpl from './partials/<%= answers.name %>.html';

export default [
    {
        id: '<%= answers.name %>',
        isDefault: true,
        when: '/<%= answers.name %>',
        controller: '<%= _.capitalize(answers.name) %>Controller',
        template: tpl
    }
];
