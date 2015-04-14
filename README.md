# Ember Hostname Environment

Manipulate ember-cli `ENV` as you like be creating a node module by the name `config/environment-{hostname}.js`

## Installation

* `npm install ember-hostname-environment --save-dev`

## Usage

* Create a module with the name `config/environment-{computer-name}.js` of the form:
```
//config/environment-my-computer-name.js
module.exports = function(ENV){
	//Here you can manipulate the ENV object as you like
	//Note that you can use ENV.environment ( can be 'development' || 'production' || 'test')

	//Of course, eventually, you HAVE TO RETURN ENV!!!
	return ENV; 
}
```
* In `config/environment.js` add the following:
```
var emberHostnameEnvironment = require('ember-hostname-environment');

module.exports = function(environment) {
  	var ENV = {
		// ...
		// ...
		// ...
	};

	//..
	//..
	//..

 	return emberHostnameEnvironment(ENV);
};

```
## License

[MIT](http://rem.mit-license.org)
