var os = require('os'),
	path = require('path'),
	colors = require('colors'),
	hostName = os.hostname(),
	hostnameEnvironment;

try {
	hostnameEnvironment = require(path.join(__dirname, '/../../config/environment-' + hostName));
	console.log(('Environment configuration has been modified for ' + hostName).cyan);
} catch (e) {}

module.exports = function emberHostnameEnvironment(ENV) {
	if (typeof hostnameEnvironment === 'function') {
		return hostnameEnvironment(ENV);
	} else {
		return ENV;	
	}
}