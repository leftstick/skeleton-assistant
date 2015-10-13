/**
 *
 *  Defines a <%= answers.name %> feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import Base from 'lib/FeatureBase';

class Feature extends Base {

    constructor() {
        super('<%= answers.name %>');
    }

    run() {}
}

export default Feature;
