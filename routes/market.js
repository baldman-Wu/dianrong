var express = require('express');
var router = express.Router();
var axios = require('axios');
/* GET home page. */
router.get('/',function(req,res,next){
    axios.get('http://192.168.15.21:3000/market',{params:{port:3000}}).then((result)=>{
        if(req.session.loginData){
            res.render('market',{isLogin:true,loginStatusData:req.session.loginData.loginStatusData,data:result.data.data});
        }else{
            res.render('market',{data:result.data.data,isLogin:false});
        }
    });
});
module.exports = router;