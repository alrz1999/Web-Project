const router = require('express').Router();
const userService = require('../services/user.service')
const userValidator = require('../routes/validators/userValidator');
const authUtil = require('../utils/auth')
const Roles = require('../models/Roles')


router.post('/login', userValidator.validateSignIn, function (req, res, next) {
  const tokenObject = authUtil.issueJWT(req.user)
  res.status(200).json({ success: true, token: tokenObject.token, expiresIn: tokenObject.expires });
});

router.post('/register', userValidator.validateSignUp, function (req, res, next) {
  let attributes = {}
  userService.createUser(req.body, attributes, Roles.Doctor).then(
    (user) => {
      res.status(202).send(user);
    }
  ).catch(err => next(err));
});

router.post('/test', authUtil.authenticate(Roles.Doctor), function (req, res, next) {
  res.send(req.user);
});
module.exports = router;
