var express = require('express');
var router = express.Router();
const Parse = require("parse/node")

router.use(function (req, res, next) {
    console.log("boooooooo!");
    next();
});

router.get('/create/:name', function (req, res, next) {
    const GameScore = Parse.Object.extend("GameScore");
    const gameScore = new GameScore();

    gameScore.set("score", 1337);
    gameScore.set("playerName", "Sean Plott");
    gameScore.set("cheatMode", false);
    console.log(gameScore.get("score"))
    gameScore.save()
        .then((gameScore) => {
            // Execute any logic that should take place after the object is saved.
            res.send('New object created with objectId: ' + gameScore.id);
        }, (error) => {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            res.send('Failed to create new object, with error code: ' + error.message);
        });
});

router.get('/get/name:', function (req, res, next) {
    console.log("we are in public guys");
    // res.send('respond with a resource');
    next();
});

router.get('/create/name:', function (req, res, next) {
    console.log("we are in public guys");
    // res.send('respond with a resource');
    next();
});

router.get('/create/name:', function (req, res, next) {
    console.log("we are in public guys");
    // res.send('respond with a resource');
    next();
});
module.exports = router;
