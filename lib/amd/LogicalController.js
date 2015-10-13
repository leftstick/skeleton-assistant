/**
 *  Defines the <%= _.capitalize(answers.name) %>Controller controller
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    /**
     * Register the <%= _.capitalize(answers.name) %>Controller class with RequireJS
     */
    define([], function() {

        /**
         * @constructor
         */
        var <%= _.capitalize(answers.name) %>Controller = function($scope) {

            $scope.$on('$destroy', function() {});
        };

        return [
            '$scope',
            <%= _.capitalize(answers.name) %>Controller
        ];

    });

})(define);
