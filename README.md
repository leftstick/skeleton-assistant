skeleton-assistant
====================
It's an helper library for generator-es6/commonjs/amd-angular

[![NPM version][npm-image]][npm-url]
![][david-url]
![][travis-url]

Generate code base for [generator-es6-angular](https://github.com/leftstick/generator-es6-angular)/[generator-amd-angular](https://github.com/leftstick/generator-amd-angular).


## Installation

```bash
npm install skeleton-assistant --save
```

## Usage

```javascript
var ass = require('skeleton-assistant');

ass({sourceType: 'CommonFeature', model: 'es6' name: 'alert', dest: './dist/'});
//A file named: Alert.js will be generated into ./dist/

ass({sourceType: 'LogicalMain', model: 'amd' name: 'home', dest: './dist/'});
//A file named: main.js will be generated into ./dist/

ass({sourceType: 'Routes', model: 'commonjs' name: 'myfavorites', dest: './dist/'});
//A file named: Routes.js will be generated into ./dist/

ass({sourceType: 'LogicalController', model: 'commonjs' name: 'home', dest: './dist/'});
//A file named: HomeController.js will be generated into ./dist/
```

## ass(options) ##

### options.sourceType

Available choices are: [CommonFeature, LogicalController, LogicalMain, Routes]

### options.model

Available choices are: [es6, amd, commonjs]

### options.name

Module name

### options.dest

Output folder

## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/skeleton-assistant/master/LICENSE)




[npm-url]: https://npmjs.org/package/skeleton-assistant
[npm-image]: https://badge.fury.io/js/skeleton-assistant.png
[david-url]: https://david-dm.org/leftstick/skeleton-assistant.png
[travis-url]:https://api.travis-ci.org/leftstick/skeleton-assistant.svg?branch=master
