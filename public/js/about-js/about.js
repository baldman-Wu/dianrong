/*vue-router*/
(function(){
    var Company=Vue.component("Company",{
        template:"#company",
        data:function(){
            return {
                company:""
            }
        },
        methods:{
            investor(index){
                var tabPane=document.querySelectorAll(".tab-pane");
                var lis=document.querySelectorAll(".investor ul li");
                var len=tabPane.length;
                for(var i=0;i<len;i++){
                    tabPane[i].style.display="none";
                    lis[i].className="";
                }
                tabPane[index].style.display="block";
                lis[index].className="active";
            }
        },
        created:function(){
            this.$http.get("http://192.168.15.21:3000/about/company",{params:{port:3000}}).then(function(res){
                this.company=res.body.company;
            });
        }
    });
    var Safety=Vue.component("Safety",{
        template:"#safety"
    });
    var Operation=Vue.component("Operation",{
        template:"#operation",
        data:function(){
            return {
                operation:""
            }
        },
        created:function(){
            this.$http.get("http://192.168.15.21:3000/about/operation",{params:{port:3000}}).then(function(res){
                this.operation=res.body.operation;
                console.log(this.operation)
            });
        }
    });
    var Depository=Vue.component("Depository",{
        template:"#depository"
    });
    var Risk=Vue.component("Risk",{
        template:"#risk"
    });
    var News=Vue.component("News",{
        template:"#news",
        data:function(){
            return {
                news:""
            }
        },
        methods:{
            pageDown(index){
                var lis=document.querySelectorAll(".news .sl-page li");
                var len=lis.length;
                for(var i=0;i<len;i++){
                    lis[i].className="";
                }
                lis[index+1].className="active";
                this.$http.get("http://192.168.15.21:3000/about/news",{params:{port:3000}}).then(function(res){
                    var num=index*5;
                    this.news=res.body.news.slice(num,num+5);
                });
            },
            prev(){
                var lis=document.querySelectorAll(".news .sl-page li");
                var len=lis.length;
                for(let i=0;i<len;i++){
                    if(i>1){
                        if(lis[i].className.indexOf("active")>-1){
                            lis[i].className="";
                            lis[i-1].className="active";
                            this.$http.get("http://192.168.15.21:3000/about/news",{params:{port:3000}}).then(function(res){
                                var num=(i-2)*5;
                                this.news=res.body.news.slice(num,num+5);
                            });
                        }
                    }    
                }
            },
            next(){
                var lis=document.querySelectorAll(".news .sl-page li");
                var len=lis.length;
                for(let j=lis.length-1;j>0;j--){
                    if(j<5){
                        if(lis[j].className.indexOf("active")>-1){
                            lis[j].className="";
                            lis[j+1].className="active";
                            this.$http.get("http://192.168.15.21:3000/about/news",{params:{port:3000}}).then(function(res){
                                var num=j*5;
                                this.news=res.body.news.slice(num,num+5);
                            });
                        } 
                    }  
                }
            }
        },
        created:function(){
            this.$http.get("http://192.168.15.21:3000/about/news",{params:{port:3000}}).then(function(res){
                this.news=res.body.news.slice(0,5);
            });
        }
    });
    var Media=Vue.component("Media",{
        template:"#media",
        data:function(){
            return {
                media:""
            }
        },
        methods:{
            pageDown(index){
                var lis=document.querySelectorAll(".media .sl-page li");
                var len=lis.length;
                for(var i=0;i<len;i++){
                    lis[i].className="";
                }
                lis[index+1].className="active";
                this.$http.get("http://192.168.15.21:3000/about/media",{params:{port:3000}}).then(function(res){
                    var num=index*5;
                    this.media=res.body.media.slice(num,num+5);
                });
            },
            prev(){
                var lis=document.querySelectorAll(".media .sl-page li");
                var len=lis.length;
                for(let i=0;i<len;i++){
                    if(i>1){
                        if(lis[i].className.indexOf("active")>-1){
                            lis[i].className="";
                            lis[i-1].className="active";
                            this.$http.get("http://192.168.15.21:3000/about/media",{params:{port:3000}}).then(function(res){
                                var num=(i-2)*5;
                                this.media=res.body.media.slice(num,num+5);
                            });
                        }
                    }    
                }
            },
            next(){
                var lis=document.querySelectorAll(".media .sl-page li");
                var len=lis.length;
                for(let j=lis.length-1;j>0;j--){
                    if(j<5){
                        if(lis[j].className.indexOf("active")>-1){
                            lis[j].className="";
                            lis[j+1].className="active";
                            this.$http.get("http://192.168.15.21:3000/about/media",{params:{port:3000}}).then(function(res){
                                var num=j*5;
                                this.media=res.body.media.slice(num,num+5);
                            });
                        } 
                    }  
                }
            }
        },
        created:function(){
            this.$http.get("http://192.168.15.21:3000/about/media",{params:{port:3000}}).then(function(res){
                this.media=res.body.media.slice(0,5);
            });
        }
    });
    var Laws=Vue.component("Laws",{
        template:"#laws"
    });
    var Partner=Vue.component("Partner",{
        template:"#partner",
        data:function(){
            return {
                partner:""
            }
        },
        methods:{
            partnerToggle(index){
                var tds=document.querySelectorAll(".partner li");
                var spans=document.querySelectorAll(".partner li span");
                var drTabPane=document.querySelectorAll(".partner .dr-tab-pane");
                var len=tds.length;
                for(let i=0;i<len;i++){
                    drTabPane[i].style.display="none";
                    spans[i].className="";
                }
                drTabPane[index].style.display="block";
                spans[index].className="selected";
            }
        },
        created(){
            this.$http.get("http://192.168.15.21:3000/about/partner",{params:{port:3000}}).then(function(res){
                this.partner=res.body.partner;
                console.log(this.partner)
            });
        }

    });

    var routes=[{
        path:"/",
        redirect:"/company"
    },{
        path:"/company",
        component:Company
    },{
        path:"/safety",
        component:Safety
    },{
        path:"/operation-data",
        component:Operation
    },{
        path:"/depository",
        component:Depository
    },{
        path:"/risk-strategy",
        component:Risk
    },{
        path:"/news",
        component:News
    },{
        path:"/media",
        component:Media
    },{
        path:"/laws",
        component:Laws
    },{
        path:"/partner",
        component:Partner
    }];

    var router=new VueRouter({
        linkActiveClass:'active',
        routes
    });

    new Vue({
        el:"#about-main",
        router:router,
        watch:{
            $route(to, from) {  
               if(to.path === "/operation-data"){
                window.location.reload(); 
               }else if(to.path === '/company'){
                window.location.reload();
               }
            }  
        }
    });
})();

/*画布*/
window.onload=function(){
    (function(){
        var myChart=echarts.init(document.getElementById('ageList'));
        var myChart1=echarts.init(document.getElementById('degreeList'));
        var myChart2=echarts.init(document.getElementById('techList'));
        var myChart3=echarts.init(document.getElementById('manageList'));
        var option = {
            legend: {
                orient: 'vertical',
                left:150,
                top:10,
                itemWidth:10,
                itemHeight:10,
                data:[{name:'25岁及以下 28%',icon:"circle",textStyle:{color:"#999"}},
                    {name:'26-30岁 47%',icon:"circle",textStyle:{color:"#999"}},
                    {name:'30-40岁 23%',icon:"circle",textStyle:{color:"#999"}},
                    {name:'40岁以上 2%',icon:"circle",textStyle:{color:"#999"}}
                    ]
            },
            series: [
                {
                    type:'pie',
                    radius: ['55%',"66%"],
                    center:["30%","45%"],
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    color:["#00bc8d","#78d6bf","#baeade","#dcf4ee"],
                    animation:false,
                    data:[{value:28, name:'25岁及以下 28%'},
                        {value:47, name:'26-30岁 47%'},
                        {value:23, name:'30-40岁 23%'},
                        {value:2, name:'40岁以上 2%'}]
                }
            ]
        };
        myChart.setOption(option);
        var option1 = {
            legend: {
                orient: 'vertical',
                left:150,
                top:10,
                itemWidth:10,
                itemHeight:10,
                data:[{name:'大专及本科 75%',icon:"circle",textStyle:{color:"#999"}},
                    {name:'硕士及以上 5%',icon:"circle",textStyle:{color:"#999"}},
                    {name:'其他 20%',icon:"circle",textStyle:{color:"#999"}}]
            },
            series: [
                {
                    type:'pie',
                    radius: ['55%',"66%"],
                    center:["30%","45%"],
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    color:["#00bc8d","#78d6bf","#baeade"],
                    animation:false,
                    data:[{value:75, name:'大专及本科 75%'},
                        {value:5, name:'硕士及以上 5%'},
                        {value:20, name:'其他 20%'}]
                }
            ]
        };
        myChart1.setOption(option1);
        var option2 = {
            legend: {
                orient: 'vertical',
                left:150,
                top:10,
                itemWidth:10,
                itemHeight:10,
                data:[{name:'硕士及以上 22%',icon:"circle",textStyle:{color:"#999"}},
                    {name:'本科 65%',icon:"circle",textStyle:{color:"#999"}},
                    {name:'大专 13%',icon:"circle",textStyle:{color:"#999"}}]
            },
            series: [
                {
                    type:'pie',
                    radius: ['55%',"66%"],
                    center:["30%","45%"],
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    color:["#00bc8d","#78d6bf","#baeade"],
                    animation:false,
                    data:[{value:22, name:'硕士及以上 22%'},
                        {value:65, name:'本科 65%'},
                        {value:13, name:'大专 13%'}]
                }
            ]
        };
        myChart2.setOption(option2);
        var option3 = {
            legend: {
                orient: 'vertical',
                left:150,
                top:10,
                itemWidth:10,
                itemHeight:10,
                data:[{name:'本科 36%',icon:"circle",textStyle:{color:"#999"}},
                    {name:'硕士及以上 64%',icon:"circle",textStyle:{color:"#999"}}]
            },
            series: [
                {
                    type:'pie',
                    radius: ['55%',"66%"],
                    center:["30%","45%"],
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    color:["#00bc8d","#78d6bf","#baeade"],
                    animation:false,
                    data:[{value:36, name:'本科 36%'},
                        {value:64, name:'硕士及以上 64%'}]
                }
            ]
        };
        myChart3.setOption(option3);
    })();
}

/*点融大事记*/
$(function() {
    $('.Suer-1').click(function() {
        var left=parseInt($(".slide").css("marginLeft"));
        if(left>=-2098) {
            $('.slide').animate({"marginLeft":"-=1049.39px"},10);
            $('.Suer-2').css('display', 'block');
        }else if(left=-2098){
            $(this).css('display', 'none');
        }       
                
    });
    $('.Suer-2').click(function() {
        var left=parseInt($(".slide").css("marginLeft"));
        console.log(left)
        if(left<=-1049){
            $('.slide').animate({"marginLeft":"+=1049.39px"},10);
            $('.Suer-1').css('display', 'block');
        }else if(left=-1049){
            $(this).css('display', 'none');
        }
        
    });
});

/*管理团队*/
(function(){
    $(".leadership td").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().siblings().find("td").removeClass('active');
        console.log($(this).attr("id"))
        $(".leader-info").eq($(this).attr("id")).addClass('active').siblings().removeClass('active');
    })
})();

/*分支机构*/
(function(){
    $(".secondary ul li").click(function(){
        $(this).find("a").addClass('active').parent().siblings().find("a").removeClass('active');
        $(".company .offices").eq($(this).index()).addClass('active').siblings().removeClass('active');
    })
})();

/*折线图*/
(function(){
    var myChart=echarts.init(document.getElementById('tradeAmountByMonth'));
    var symbolSize = 20;
    var data = [[-22.1, 40], [-46.5, 30], [-50, 20], [-56.5, 10], [15, 0]];
    var points = [];
    option = {
        tooltip: {
            formatter: function (params) {
                var data = params.data || [0, 0];
                return data[0].toFixed(2) + ', ' + data[1].toFixed(2);
            },
        },
        grid: {
            left: '3%',
            top:"10%",
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data:["2017-01","2017-02","2017-03","2017-04","2017-05","2017-06","2017-07","2017-08","2017-09","2017-10","2017-11","2017-12"],
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            nameTextStyle:{
                color:"#999",
            }
        },
        yAxis: {
            min: "0亿",
            max: "500亿",
            type: 'category',
            data:["0亿","100亿","200亿","300亿","400亿","500亿"],
            nameTextStyle:{
                color:"#999",
                fontSize:"16px"
            },
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            }
        },
        series: [
            {
                id: 'a',
                type: 'line',
                smooth: true,
                symbolSize: symbolSize,
                data: data
            }
        ]
    };
    var zr = myChart.getZr();
    zr.on('mousemove', function (params) {
        var pointInPixel = [params.offsetX, params.offsetY];
        zr.setCursorStyle(myChart.containPixel('grid', pointInPixel) ? 'copy' : 'default');
    });
    myChart.setOption(option);
})();

/*饼图 地图*/
(function(){
    var myChart=echarts.init(document.getElementById('insertData'));
    var myChart1=echarts.init(document.getElementById('registerCountByCity'));
    var option = {
        legend: {
            orient: 'vertical',
            left:200,
            top:10,
            itemWidth:10,
            itemHeight:10,
            textStyle:{
                fontSize:24
            }
        },
        series: [
            {   
                name:"投资金额分布",
                type:'pie',
                radius: ['55%',"75%"],
                center:["50%","50%"],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: '18'
                        }
                    },
                    emphasis:{
                        show: true,
                        textStyle: {
                            fontSize: '24',
                            fontWeight: 'bold'
                        }
                    }
                },
                color:["#78d6bf","#ffdf83","#fcca99","#d0cbba","#9b8872","#9fdeed","#bcee90","#6fb7a3"],
                animation:true,
                data:[{value:27.36, name:'经典投资团'},
                    {value:13.2, name:'新手投资团'},
                    {value:10.99, name:'节节发'},
                    {value:3.35, name:'散标'},
                    {value:0.72, name:'东方团'},
                    {value:25.74, name:'季季翻投资团'},
                    {value:2.55, name:'稳健投资团'},
                    {value:16.09, name:'合作共享团'}],
                    itemStyle:{
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
            }
        ]
    };
    myChart.setOption(option);
    myChart1.setOption(option);
})();
