var os = require('os'),
	path = require('path'),
	colors = require('colors'),
	hostName = os.hostname(),
	hostnameEnvironment;

try {
	hostnameEnvironment = require(path.join(__dirname, '/../../config/environment-' + hostName));
	if (!process.env.DISABLE_EMBER_HOSTNAME_ENVIRONMENT) {
		console.log(('Environment configuration has been modified for ' + hostName).yellow);
	} else {
		hostnameEnvironment = null;
		console.log(('Dont worry, your local environment for ' + hostName + ' has not been applied').olive);	
	}
	
} catch (e) {}

module.exports = function emberHostnameEnvironment(ENV) {
	if (typeof hostnameEnvironment === 'function') {
		return hostnameEnvironment(ENV);
	} else {
		return ENV;	
	}
}