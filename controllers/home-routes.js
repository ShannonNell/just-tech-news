const router = require('express').Router();

router.get('/', (req, res) => {
    // this uses homepage.handlebars template and renders it
    res.render('homepage');
});

module.exports = router;
