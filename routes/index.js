var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.loginData){
        res.render('index',req.session.loginData);
        return
    }else{
        res.render('index',{isLogin:false});
        return
    }
    
});

module.exports = router;
