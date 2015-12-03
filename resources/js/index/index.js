/**
 * Created by Administrator on 2015/8/24.
 */

$(function(){
	
  //定位首页
  $('#wx-nav-ul li').eq(0).addClass('active');

  //首页导航切换效果
  $('#wx-article-nav li').click(function(){ $(this).addClass('wx-article-active').siblings().removeClass('wx-article-active');
  });
  
  //问题列表三个按钮状态判断
  
  $('#wx-main .wx-main-li').each(function(){
	 if($(this).find('.wx-count1').html() != '0'){
		$(this).find('.wx-count1').css('color','#5ccc81');
	    $(this).find('.wx-reply-btn').html('&#xe60a;');
	 }else{
		$(this).find('.wx-count1').css('color','#cccccc');
	    $(this).find('.wx-reply-btn').html('&#xe604;').css('color','#cccccc'); 	 
	 }
	 
	 if($(this).find('.wx-count2').html() != '0'){
		$(this).find('.wx-count2').css('color','#999bcc');
	    $(this).find('.wx-view-btn').html('&#xe60b;');
	 }else{
		$(this).find('.wx-count2').css('color','#cccccc');
	    $(this).find('.wx-view-btn').html('&#xe606;').css('color','#cccccc'); 	 
	 }
	 
	 if($(this).find('.wx-count3').html() != '0'){
		$(this).find('.wx-count3').css('color','#ffc44c');
	    $(this).find('.wx-vote-btn').html('&#xe60e;');
	 }else{
		$(this).find('.wx-count3').css('color','#cccccc');
	    $(this).find('.wx-vote-btn').html('&#xe617;').css('color','#cccccc'); 	 
	 }
	 
  });
  
  
  /*分页的调用*/
  page({
	 id:'page',
	 nowNum:1,
	 allNum:10,
	 callBack:function(now,all){
		console.log('当前页：'+now+',总共页：'+all);
	 }
  });
  
});