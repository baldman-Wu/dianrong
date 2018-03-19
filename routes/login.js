var express = require('express');
var router = express.Router();
var axios=require("axios");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.get("/check",function(req,res){
    axios.get("http://192.168.15.21:3000/users/getLogin",{params:{code:1,name:req.query.name,pwd:req.query.pwd}}).then((result)=>{
        if(result.data.codes===1&&result.status===200){
            const loginData = {
                isLogin:true,
                loginStatusData:result.data.data
            };
            req.session.loginData = loginData;
            console.log(req.session.loginData)
            return res.json({code:0});

        }else{
            return res.status(200).json({data:result.data});
        }
    });
});

module.exports = router;