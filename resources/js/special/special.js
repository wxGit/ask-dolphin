/**
 * Created by Administrator on 2015/8/20.
 */
//定位专题页
$('#wx-nav-ul li').eq(1).addClass('active');

//首页导航切换效果
  $('#wx-article-nav li').click(function(){ $(this).addClass('wx-article-active').siblings().removeClass('wx-article-active');
  });