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

//programmatically
ass({sourceType: 'CommonFeature', model: 'es6' name: 'alert', dest: './dist/', enableInquirer: false});
//A file named: Alert.js will be generated into ./dist/


//give ui, let user type what they want
ass({sourceType: 'CommonFeature', model: 'es6' name: 'alert', dest: './dist/', enableInquirer: true});
```

## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/skeleton-assistant/master/LICENSE)




[npm-url]: https://npmjs.org/package/skeleton-assistant
[npm-image]: https://badge.fury.io/js/skeleton-assistant.png
[david-url]: https://david-dm.org/leftstick/skeleton-assistant.png
[travis-url]:https://api.travis-ci.org/leftstick/skeleton-assistant.svg?branch=master
