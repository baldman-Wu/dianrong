$(window).scroll(function() {
	//	console.log($(this).scrollTop()); //文档滚动距离
	var mytop = $('html').scrollTop();
	if(mytop < 528) {
		$(".pull-right li").eq(0).addClass("active").siblings().removeClass("active");
	} else if(mytop < 1120) {
		$(".pull-right li").eq(1).addClass("active").siblings().removeClass("active");
	} else if(mytop < 2590) {
		$(".pull-right li").eq(2).addClass("active").siblings().removeClass("active");
	} else if(mytop < 3390) {
		$(".pull-right li").eq(3).addClass("active").siblings().removeClass("active");
	} else{
		$(".pull-right li").eq(4).addClass("active").siblings().removeClass("active");
	}
})
$(function(){
	var no1 = "528px";
	var no2 = "1120px";
	var no3 = "2590px";
	var no4 = "3390px";
	$(".active-a").click(function() {
		console.log($('html').scrollTop())	
		$('html').animate({
			"scrollTop":"0px"
		},800)
	})
	$(".active-b").click(function() {
		console.log($('html').scrollTop())
		$('html').animate({
			"scrollTop":no1
		},800)
	})
	$(".active-c").click(function() {
		console.log($('html').scrollTop())
		$('html').animate({
			"scrollTop":no2
		},800)
	})
	$(".active-d").click(function() {
		console.log($('html').scrollTop())
		$('html').animate({
			"scrollTop":no3
		},800)		
	})
	$(".active-e").click(function() {
		console.log($('html').scrollTop())
		$('html').animate({
			"scrollTop":no4
		},800)
	})
});