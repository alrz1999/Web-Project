const userService = require('../../services/user.service');
const { body } = require('express-validator');
const { validationResult } = require('express-validator');
let Parse = require('parse/node')

const validateLoginFrom = () => {
    return [
        body('username', "username doesn't exists").exists(),
        body('password', "password doesn't exists").exists(),
        body('password', "password greater than 5 alphabet").isLength(min = 5),
        body('email').optional().isEmail(),
    ]
}

const validateSignIn = [validateLoginFrom(), (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    userService.getUser(req.body.username)
        .then(async (user) => {
            if (!user) {
                res.status(401).json({ success: false, msg: "could not find user" });
            }
            const isValid = await Parse.User.logIn(user.get('username'), req.body.password)

            if (isValid) {
                req.user = {
                    username: user.get('username'),
                    email: user.getEmail(),
                    role: user.get('role')
                };
                next();
            } else {
                res.status(401).json({ success: false, msg: "you entered the wrong password" });
            }
        })
        .catch((err) => {
            next(err);
        });
}]

const validateRegisterFrom = () => {
    return [
        body('username', "username doesn't exists").exists(),
        body('password', "password doesn't exists").exists(),
        body('password', "password greater than 5 alphabet").isLength(min = 5),
        body('email').optional().isEmail(),
    ]
}


const validateSignUp = [validateRegisterFrom(), async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    let duplicateUsername = await userService.doesExists('username', req.body.username);
    if (duplicateUsername) {
        return res.status(409).send({ message: "username already exist." });
    }

    let duplicateEmail = await userService.doesExists('email', req.body.email);
    if (duplicateEmail) {
        return res.status(409).send({ message: "email already exist." });
    }

    next();
}]


module.exports = { validateSignIn, validateSignUp }