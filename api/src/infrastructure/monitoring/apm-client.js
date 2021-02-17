const apm = require('elastic-apm-node');
const config = require('../../../config/index.config')

const init = function () {
    if (config.apm_enabled) {
        apm.start({
            serviceName: 'Web-Project',
            // Use if APM Server requires a token
            secretToken: '',
            // Use if APM Server uses API keys for authentication
            apiKey: '',
            // Set custom APM Server URL (default: http://localhost:8200)
            serverUrl: 'http://localhost:8200',
        });
    }
};

module.exports = { init }