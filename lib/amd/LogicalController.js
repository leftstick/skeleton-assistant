/**
 *  Defines the <%= _.capitalize(answers.name) %>Controller controller
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

define([], function() {

    var <%= _.capitalize(answers.name) %>Controller = function($scope) {

        $scope.$on('$destroy', function() {});
    };

    <%= _.capitalize(answers.name) %>Controller.$inject = ['$scope'];

    return <%= _.capitalize(answers.name) %>Controller;

});
