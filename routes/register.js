var express = require('express');
var router = express.Router();
var axios=require("axios");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('register');
});
router.get('/play', function(req, res, next) {
    axios.get('http://192.168.15.21:3000/users/getRegister',{params:{port:3000,tel:req.query.tel,pwd:req.query.pwd}}).then((result)=>{
    res.status(200).json({data:result.data.data,msg:result.data.msg})
    });
});

module.exports = router;