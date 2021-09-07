
const router = require('express').Router();


// "/" route handlers

router.get('/', function (req, res) {
    res.render('home');
});


module.exports = router;