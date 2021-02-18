const { authService } = require('../../../application/security')

const authenticate = (...roles) => async (req, res, next) => {
    const token = getTokenFromHeader(req);
    console.log(token)
    if (!token) {
        return res.status(401).send({ message: "token needed" });
    }
    try {
        let payload = await authService.decodeToken({ token });
        req.user = payload;
        console.log(roles);
        if (roles.length > 0 && !roles.find(role => req.user.role === role)) {
            return res.status(403).send("access denied.");
        }
        req.payload = payload;
        next();
    } catch (error) {
        throw error
    }
};

function getTokenFromHeader(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
        req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }

    return null;
}

module.exports = authenticate;