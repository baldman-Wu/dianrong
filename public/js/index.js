$(function() {
    $('.hoverli-text').mouseover(function() {
        $('.hoverimg').css('display', 'block')
    })
    $('.hoverli-text').mouseout(function() {
        $('.hoverimg').css('display', 'none')
    })
    $('.hoverli-text-1').mouseover(function() {
        $('.hoverimg-1').css('display', 'block')
    })
    $('.hoverli-text-1').mouseout(function() {
        $('.hoverimg-1').css('display', 'none')
    });
    var title=document.title;
    switch(title){
        case "点融获渣打直投融资，2016年网贷之家排名前三，高效透明的互联网金融平台,推出明星投资产品团团赚":
            $(".header-nav li").first().addClass('home-page-li');
            break;
        case "项目列表-团团赚,栗栗盈,散标,债权转让 -点融官网":
            $(".header-nav li").eq(1).addClass('home-page-li');
            break;
        case "信息披露-点融简介":
            $(".header-nav li").eq(3).addClass('home-page-li');
            break;
    }
})