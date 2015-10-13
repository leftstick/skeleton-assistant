/**
 *  Defines the <%= answers.name %>
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
import FeatureBase from 'lib/FeatureBase';

class Feature extends FeatureBase {
    constructor() {
        super('<%= answers.name %>');
    }

    beforeStart() {}

    run() {}
}

export default Feature;
