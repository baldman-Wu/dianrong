/**
 * 输入用户名 class=upInput
 * 输入密码 class=downInput
 */
$(function(){
    $(".upInput").keyup(function(){
        $(".downInput").keyup(function(){
            var upInput=$(".upInput").val();
            var downInput=$(".downInput").val();
            if(upInput!="" && downInput!=""){
                $(".login").removeAttr("disabled").css("background","#00bc8d");
            }else{
                $(".login").attr("disabled","disabled").css("background","");
            }
        })
    });
    $(".downInput").keyup(function(){
        $(".upInput").keyup(function(){
            var upInput=$(".upInput").val();
            var downInput=$(".downInput").val();
            if(upInput!="" && downInput!=""){
                $(".login").removeAttr("disabled").css("background","#00bc8d");
            }else{
                $(".login").attr("disabled","disabled").css("background","");
            }
        })
    });

    if(localStorage.getItem("name")){
        var username=localStorage.getItem("name");
        var password=localStorage.getItem("pwd");
        $(".upInput").val(username);
        $(".downInput").val(password);
        $(".login").removeAttr("disabled").css("background","#00bc8d");
    }

    //点击登录
    $(".login").click(function(){
        var upInput=$(".upInput").val();
        var downInput=$(".downInput").val();
        if($(".checkboxStyle").is(":checked")){
            localStorage.setItem("name",upInput);
            localStorage.setItem("pwd",downInput);
            console.log("已勾选")
        }
        $.ajax({
            type:"GET",
            url:"/login/check",
            data:{
                name:upInput,
                pwd:downInput
            },
            success:function(data,textStatus){
               if(data.code === 0){
                    window.location.href = "/"
               }
            }
        })
    });
});