/**
 *
 *   Defines a <%= answers.name %> feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 **/
'use strict';
define(['lib/FeatureBase'], function(FeatureBase){

    class Feature extends FeatureBase{

        constructor(){
            super('<%= answers.name %>');
        }

        execute(){
        }
    }

    return Feature;
});
