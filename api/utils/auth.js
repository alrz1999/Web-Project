var jwt = require('jsonwebtoken');
var userService = require('../services/user.service');
const config = require('../config/index.config')


const authenticate = (...roles) => (req, res, next) => {
    const token = getTokenFromHeader(req);
    if (!token) {
        return res.status(401).send({ message: "token needed" });
    }
    jwt.verify(token, config.secret, (err, user) => {
        if (err) {
            return res.status(403).send();
        }
        req.user = user;
        if (roles && !roles.find(role => req.user.role === role)) {
            return res.status(403).send();
        }
        next();
    });
};

function getTokenFromHeader(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
        req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }

    return null;
}

function issueJWT(user) {
    console.log(process.env);
    const expiresIn = '1h';
    const key = config.secret;
    const payload = {
        sub: user.username,
        role: user.role,
        email: user.email,
        iat: Date.now()
    };
    const signedToken = jwt.sign(payload, key, { expiresIn: expiresIn });

    return {
        token: "Bearer " + signedToken,
        expires: expiresIn
    }
}

const checkIsInRole = (...roles) => (req, res, next) => {
    if (!req.user) {
        return res.redirect('/login')
    }

    const hasRole = roles.find(role => req.user.role === role)
    if (!hasRole) {
        return res.redirect('/login')
    }

    return next()
}

const getRedirectUrl = role => {
    switch (role) {
        case ROLES.Admin:
            return '/admin-dashboard'
        case ROLES.Customer:
            return '/customer-dashboard'
        default:
            return '/'
    }
}

module.exports = { issueJWT, authenticate };
