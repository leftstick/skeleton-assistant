/**
 *  Defines the <%= answers.name %>
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
define(['lib/FeatureBase'], function(FeatureBase){

    class Feature extends FeatureBase{

        constructor(){
            super('<%= answers.name %>');
        }

        beforeStart(){
        }

        execute(){
        }
    }

    return Feature;
});
