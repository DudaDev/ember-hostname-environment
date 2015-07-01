var os = require('os'),
	path = require('path'),
	colors = require('colors'),
	hostName = os.hostname(),
	hostnameEnvironment;

if (!process.env.DISABLE_EMBER_HOSTNAME_ENVIRONMENT) {
	try {
		hostnameEnvironment = require(path.join(__dirname, '/../../config/environment-' + hostName));
		console.log(('Environment configuration has been modified for ' + hostName).cyan);
	} catch (e) {}	
}

module.exports = function emberHostnameEnvironment(ENV) {
	if (!process.env.DISABLE_EMBER_HOSTNAME_ENVIRONMENT && typeof hostnameEnvironment === 'function') {
		return hostnameEnvironment(ENV);
	} else {
		return ENV;	
	}
}