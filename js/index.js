/**
 * Created by Administrator on 2017/5/15.
 */
    //隐藏大于0的li元素（默认第一个li元素从0开始）
    $('.banner ul li:gt(0)').hide();
    //获取li的个数
    var lilen=$('.banner ul li').length;
    var n=0;
    var times;
    function play(){
        //eq(n):获取第n个元素  fadeIn()：淡入效果
        //siblings('li')：获取同级元素,括号里的元素表示隐藏同级中的某元素  hide()：隐藏
        $('.banner ul li').eq(n).fadeIn().siblings('li').hide();

    }
    function autoPlay(){
        times=setInterval(function(){
            n++;
            if(n>=lilen){
                n=0
            }
            play();
        },2000)
    }
    autoPlay();
    $('.photo').hover(function(){
        //清除定时器
        clearInterval(times);
    },function(){
        autoPlay();
    })
// var w=document.body.clientWidth;
// var h=document.body.clientHeight;
// alert(w);
// alert(h);