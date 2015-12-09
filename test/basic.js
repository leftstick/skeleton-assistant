'use strict';
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

    var dest = path.resolve(__dirname, 'tmp');
    var date = new Date().format('mmm d, yyyy');

    it('simple generate CommonFeature', function(done) {
        var destPath = path.resolve(dest, 'Alert.js');
        ass({name: 'alert', dest: dest});
        should(fs.readFileSync(destPath, {encoding: 'utf8'})).eql('/**\n *  Defines the alert\n *\n *  @author  ' + username + '\n *  @date    ' + date + '\n *\n */\n\'use strict\';\nimport FeatureBase from \'lib/FeatureBase\';\n\nclass Feature extends FeatureBase {\n    constructor() {\n        super(\'alert\');\n    }\n\n    beforeStart() {}\n\n    execute() {}\n}\n\nexport default Feature;\n', 'content is incorrect');
        done();
    });

    it('simple generate LogicalController', function(done) {
        var destPath = path.resolve(dest, 'HomeController.js');
        ass({
            name: 'home',
            dest: dest,
            sourceType: 'LogicalController',
            model: 'commonjs'
        });
        should(fs.readFileSync(destPath, {encoding: 'utf8'})).eql('/**\n *  Defines the HomeController controller\n *\n *  @author  ' + username + '\n *  @date    ' + date + '\n *\n */\n\'use strict\';\nvar HomeController = function($scope) {\n\n    $scope.$on(\'$destroy\', function() {});\n};\n\nHomeController.$inject = [\'$scope\'];\n\nmodule.exports = HomeController;\n', 'content is incorrect');
        done();
    });

    it('simple generate LogicalMain', function(done) {
        var destPath = path.resolve(dest, 'main.js');
        ass({
            name: 'home',
            dest: dest,
            sourceType: 'LogicalMain',
            model: 'amd'
        });
        should(fs.readFileSync(destPath, {encoding: 'utf8'})).eql('/**\n *\n *   Defines a home feature\n *\n *  @author  ' + username + '\n *  @date    ' + date + '\n *\n **/\n\'use strict\';\ndefine([\'lib/FeatureBase\'], function(FeatureBase) {\n\n    class Feature extends FeatureBase {\n\n        constructor() {\n            super(\'home\');\n        }\n\n        execute() {\n        }\n    }\n\n    return Feature;\n});\n', 'content is incorrect');
        done();
    });

    it('simple generate Routes', function(done) {
        var destPath = path.resolve(dest, 'Routes.js');
        ass({
            name: 'home',
            dest: dest,
            sourceType: 'Routes',
            model: 'commonjs'
        });
        should(fs.readFileSync(destPath, {encoding: 'utf8'})).eql('/**\n *\n *  Routes module expose route information used in home feature\n *\n *  @author  ' + username + '\n *  @date    ' + date + '\n *\n **/\n\'use strict\';\nvar tpl = require(\'./partials/home.html\');\n\nmodule.exports = [\n    {\n        id: \'home\',\n        isDefault: false,\n        when: \'/home\',\n        controller: \'HomeController\',\n        template: tpl\n    }\n];\n', 'content is incorrect');
        done();
    });

    afterEach(function() {
        try {
            rimraf.sync(dest);
        } catch (e) {}
    });

});
