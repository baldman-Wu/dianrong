/**
 * input框 id=input-content;class=sube-inpt
 * 同意协议 class=tick-wrapper,tick-wrapper-add;id=suer
 * 下一步 id=btn;class=btn-text
 */
$(function(){
	$("#input-content").focus();
	$(".inpt-sub").css("border", "1px solid #00bc8d");

	//同意协议点击事件
	$('#suer').click(function(){
		if($('#suer').hasClass('tick-wrapper-add')){
			$('#suer').removeClass('tick-wrapper-add');
			if(!$('#suer').hasClass('tick-wrapper-add') && $("#input-content").val() != ""){
				$("#btn").attr("disabled", "disabled");
				$("#btn").css("background-color", "");
			}
		}
		else if(!$('#suer').hasClass('tick-wrapper-add')){
			$('#suer').addClass('tick-wrapper-add');
		}
		if($('#suer').hasClass('tick-wrapper-add') && $("#input-content").val() != ""){
			$("#btn").removeAttr("disabled");
			$("#btn").css("background", "#00bc8d");
		}
		$(".sube-inpt").change(function(){
			if($("#input-content").val() == "") {
				$("#btn").attr("disabled", "disabled");
				$("#btn").css("background-color", "");
			} else if($("#input-content").val() != "" && $('#suer').hasClass('tick-wrapper-add')) {
				$("#btn").removeAttr("disabled");
				$("#btn").css("background", "#00bc8d");
			}
		});
	});
	//在对input的val进行判断，空的时候无法点击button
	$(".sube-inpt").keyup(function(){
		if($('#suer').hasClass('tick-wrapper-add')){
			$("#btn").removeAttr("disabled");
			$("#btn").css("background","#00bc8d");
		}
	});
});
//点击下一步
$(function(){
	$('#btn').click(function(){
		var iPhone = $("#input-content").val();
		if(!(/^1[34578]\d{9}$/.test(iPhone))){
			$(".err").html("手机号码必须为11位数字!").css("marginTop","35px");
			return false;
		}else{
			$(".err").html("");
			$('.login-warp').animate({
				"left": "0",
				"opacity": "1"
			}, 500, function(){
				$("#imgscode").imgcode();
			});
		}
	});
});
//点击注册
$(function() {
    $('#btn-a').click(function() {
    	var iPhone = $("#input-content").val();
        var num1 = $("#apwd-1").val();
        var num2 = $("#apwd-2").val();
        var numb = /^[a-zA-Z][a-zA-Z0-9_]{5,20}$/;
        var id=Date.now();
        if(numb.test(num1)){
            $(".err").html("密码格式正确").css("color","green");
            $.ajax({
            	type:"GET",
            	url:"/register/play",
            	data:{
            		tel:iPhone,
            		pwd:num1
            	},
            	success:function(data,textStatus){
            		console.log(data);
            		$(".err").html(data.msg);
            	}
            })
        }else{
        	$(".err").html("密码格式必须是由字母数字构成");
            return;
        }
        if(num2 == num1){
        	$(".err").html("确认密码与密码一致").css("color","green");
            location.href="/login";
        }else{
        	$(".err").html("请输入确认密码");
            return;
        }
    });
});