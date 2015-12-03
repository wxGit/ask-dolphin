/**
 * Created by Administrator on 2015/8/25.
 */
$(function(){
    var nav=$('#hwq_nav li span');
    var lis=$('.hwq-main-myattention');

    nav.click(function(){
         var n=$(this);
        console.log(n);
        if(n.html()=='赞我的'){
            //这里要设置$ajax请求
            n.parent().addClass('hwq-nav-current');
            n.parent().siblings().removeClass();
            lis.eq(0).show();
            lis.eq(1).hide();
            lis.eq(2).hide();
        }
        else if(n.html()=='回答我的'){
            //这里要设置$ajax请求
            n.parent().addClass('hwq-nav-current');
            n.parent().siblings().removeClass();
            lis.eq(0).hide();
            lis.eq(1).show();
            lis.eq(2).hide();
        }
        else if(n.html()=='@我的'){
            //这里要设置$ajax请求
            n.parent().addClass('hwq-nav-current');
            n.parent().siblings().removeClass();
            lis.eq(0).hide();
            lis.eq(1).hide();
            lis.eq(2).show();
        }
    });

});