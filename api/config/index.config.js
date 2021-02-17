require('dotenv').config({ path: __dirname + '\\.env' });

const secret = process.env.SECRET;
// const apm_enabled = process.env.APM_ENABLED || false;
const apm_enabled =  false;


module.exports = { secret, apm_enabled }