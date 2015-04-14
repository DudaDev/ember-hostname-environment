var os = require('os');
module.exports = function emberHostnameEnvironment(ENV){
	var hostnameEnvironment,
		hostName = os.hostname();
	try {
		hostnameEnvironment = require(__dirname + '/../../config/environment-' + hostName);
		if (typeof hostnameEnvironment === 'function'){
			hostnameEnvironment(ENV);
		}
		console.log('Modified environment configuration for ' + hostName);
	} catch (e){}
	return ENV;
}