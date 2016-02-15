/**
 *  Defines the <%= answers.name %>
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import FeatureBase from 'lib/FeatureBase';

class Feature extends FeatureBase{
    constructor(){
        super('<%= answers.name %>');
    }

    beforeStart(){
    }

    execute(){
    }
}

export default Feature;
