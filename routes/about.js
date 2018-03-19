var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.loginData){
        res.render('about',req.session.loginData);
    }else{
        res.render('about',{isLogin:false});
    }
});

module.exports = router;