const { makeGenerateToken, makeDecodeToken } = require('./AccessTokenManager');
const { jwtTokenManager } = require('../../infrastructure/security/JwtAccessTokenManager');

const generateToken = makeGenerateToken({ jwtTokenManager });
const decodeToken = makeDecodeToken({ jwtTokenManager });

const authService = Object.freeze({
    generateToken,
    decodeToken
});

module.exports = { authService, generateToken, decodeToken };