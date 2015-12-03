/**
 * Created by Administrator on 2015/8/27.
 */
$(function(){
   
   modalPos();
   $(window).resize(function(){
      modalPos();
   });
   
   //举报内容选择实现
   $('#wx-report ul li').click(function(){
	  $(this).addClass('wx-report-active').siblings().removeClass('wx-report-active');
   });
   
   //按钮效果
   $('#wx-report-close').click(function(){
	  $('#wx-report').hide();  
	  $('#wx-shade').hide(); 
	  $(document.body).css("overflow","auto");
   }); 	
   
   $('#wx-report-confirm').click(function(){
	  $('#wx-report').hide();  
	  $('#wx-shade').hide(); 
	  $(document.body).css("overflow","auto");
   });
   
   
   //按钮效果
   $('#wx-reply-close').click(function(){
	  $('#wx-reply-modal').hide();  
	  $('#wx-shade').hide(); 
	  $(document.body).css("overflow","auto");     
   });
   
   $('#wx-sure-btn').click(function(){
	  $('#wx-reply-modal').hide();  
	  $('#wx-shade').hide(); 
	  $(document.body).css("overflow","auto");     
   });
   
   function modalPos(){
	   
	   $('#wx-report').css({
		 'position':'absolute',
		 'left':($(window).width()-report_w)/2+$(window).scrollLeft(),
		 'top':($(window).height()-report_h)/2+ $(window).scrollTop()
	   });
	   
	   $('#wx-reply-modal').css({
		'position':'absolute',
		'left':($(window).width()-reply_w)/2+$(window).scrollLeft(),
		'top':($(window).height()-reply_h)/2+$(window).scrollTop()-100
	   });
		  
	  //举报功能
	   var report_w = $('#wx-report').width();
	   var report_h = $('#wx-report').height();
	   var reply_w = $('#wx-reply-modal').width();
	   var reply_h = $('#wx-reply-modal').height();
		  
	   $('#wx-report-btn').on('click',function(){
		  $('#wx-shade').css('top',$(document).scrollTop());
		  $('#wx-shade').show();
		  
		  $('#wx-report').css({
			 'position':'absolute',
			 'left':($(window).width()-report_w)/2+$(window).scrollLeft(),
			 'top':($(window).height()-report_h)/2+ $(window).scrollTop()
		  });
		  
		  $('#wx-report').show();
		  
		  $(document.body).css("overflow","hidden"); 
	   });
	   
	   //回复功能
	   $('.ireply').click(function(){
		  $('#wx-shade').css('top',$(document).scrollTop());
		  $('#wx-shade').show();
		   
		  $('#wx-reply-modal').css({
			'position':'absolute',
			'left':($(window).width()-reply_w)/2+$(window).scrollLeft(),
			'top':($(window).height()-reply_h)/2+$(window).scrollTop()-100
		  }); 
		  $('#wx-reply-modal').show(); 
		  $(document.body).css("overflow","hidden"); 
	   }); 
   }
   
});