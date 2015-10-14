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
        should(fs.readFileSync(destPath, {encoding: 'utf8'})).eql('/**\n *  Defines the alert\n *\n *  @author  ' + username + '\n *  @date    ' + date + '\n *\n */\n\'use strict\';\nimport Base from \'lib/FeatureBase\';\n\nclass Feature extends Base {\n    constructor() {\n        super(\'alert\');\n    }\n\n    beforeStart() {}\n\n    run() {}\n}\n\nexport default Feature;\n', 'content is incorrect');
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
        should(fs.readFileSync(destPath, {encoding: 'utf8'})).eql('/**\n *  Defines the HomeController controller\n *\n *  @author  ' + username + '\n *  @date    ' + date + '\n *\n */\n\'use strict\';\nvar HomeController = function($scope) {\n\n    $scope.$on(\'$destroy\', function() {});\n};\n\nmodule.exports = [ \'$scope\', HomeController ];\n', 'content is incorrect');
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
        should(fs.readFileSync(destPath, {encoding: 'utf8'})).eql('/**\n *\n *   Defines a home feature\n *\n *  @author  ' + username + '\n *  @date    ' + date + '\n *\n */\ndefine([\'lib/FeatureBase\'], function(Base) {\n    \'use strict\';\n\n    var Feature = function() {\n        Base.call(this, \'home\');\n    };\n\n    Feature.prototype = new Base();\n\n    Feature.prototype.constructor = Feature;\n\n    Feature.prototype.run = function() {};\n\n    return Feature;\n});\n', 'content is incorrect');
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
        should(fs.readFileSync(destPath, {encoding: 'utf8'})).eql('/**\n *\n *  Routes module expose route information used in home feature\n *\n *  @author  ' + username + '\n *  @date    ' + date + '\n *\n */\n\'use strict\';\nvar tpl = require(\'./partials/home.html\');\n\nmodule.exports = [\n    {\n        id: \'home\',\n        isDefault: false,\n        when: \'/home\',\n        controller: \'HomeController\',\n        template: tpl\n    }\n];\n', 'content is incorrect');
        done();
    });

    afterEach(function() {
        try {
            rimraf.sync(dest);
        } catch (e) {}
    });

});
