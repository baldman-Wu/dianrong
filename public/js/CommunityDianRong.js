$(function() {
	$('.list-style').mouseenter(function() {
		$('.nav-ul-li').animate({
			"top": "80px",
			"opacity": "0"
		}, 300, function() {
			$('.nav-ul-li').css("display", "none")
		}).finish();
		$('.nav-ul-li').css("display", "block")
		$('.nav-ul-li').animate({
			"top": "43px",
			"opacity": "1"
		}, 300)
	}).mouseleave(function() {
		$('.nav-ul-li').animate({
			"top": "80px",
			"opacity": "0"
		}, 300, function() {
			$('.nav-ul-li').css("display", "none")
		});
	})
})

$(function() {
	$('.comeing_channel-ul li').click(function() {
		$(this).children().css("color", "#00BD8C").parent().siblings().children().css("color", "#000000");
		$(this).css("border-bottom", "2px solid #00BD8C").siblings().css("border-bottom", "0");
	})
})