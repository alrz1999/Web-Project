const jwt = require('jsonwebtoken');
const config = require('../../../config/index.config');

const JWT_SECRET_KEY = config.secret;

const generateToken = function ({ payload }) {
    return jwt.sign(payload, JWT_SECRET_KEY);
};

const decodeToken = function ({ token }) {
    return jwt.verify(token, JWT_SECRET_KEY);
};

const jwtTokenManager = {
    generateToken,
    decodeToken
};

module.exports = { jwtTokenManager, generateToken, decodeToken };