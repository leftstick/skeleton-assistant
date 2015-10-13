var ass = require('../');
var should = require('should');
var path = require('path');
var fs = require('fs');
var rimraf = require('rimraf');
require('date-util');

var username;
try {
    username = process.env.USER || process.env.USERPROFILE.split(path.sep)[2];
} catch (e) {
    username = '';
}

describe('basic test', function() {

    var src = path.resolve(__dirname, 'logo');
    var dest = path.resolve(__dirname, 'tmp');
    var destPath = path.resolve(__dirname, 'tmp', 'Alert.js');
    var date = new Date().format('mmm d, yyyy');

    it('simple generate', function(done) {
        ass({name: 'Alert', dest: dest});
        should(fs.readFileSync(destPath, {encoding: 'utf8'})).eql('/**\n *  Defines the Alert\n *\n *  @author  haozuo\n *  @date    Oct 13, 2015\n *\n */\nimport FeatureBase from \'lib/FeatureBase\';\n\nclass Feature extends FeatureBase {\n    constructor() {\n        super(\'Alert\');\n    }\n\n    beforeStart() {}\n\n    run() {}\n}\n\nexport default Feature;\n', 'content is incorrect');
        done();
    });

    afterEach(function() {
        try {
            // rimraf.sync(dest);
        } catch (e) {}
    });

});
