require('dotenv').config({path:__dirname+'\\.env'});

const secret = process.env.SECRET;


module.exports = { secret }