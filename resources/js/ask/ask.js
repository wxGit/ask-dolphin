$(function(){

    //初始化头部样式
    $('.wx-header-ask').html('&#xe60d;').css('color','#fff');

    //初始化组件
    //var  dropMenu2 = one.ui.dropMenu(".one_ui_dropMenu");
    var del=$('.delete');//添加到标签栏里边标签的删除标志；
    var showtags=$('#showtags');//已经添加到标签栏的标签；
    var addshow=$('#addtags span');//要被选择的标签；
    //var tagwarn = $('#wx-tag-warn');
    var title=$('#title');//标题栏
    var sub=$('#sub');//表单提交按钮
    var arr=new Array();
    var fo=$('#form1');
    //标题栏获得焦点事件
    title.focus(function(){
        title.siblings('span').hide();
    });
    //标题栏失去焦点事件
    title.focusout(function(){
        if(title.val().length<=0){
            title.siblings('span').css('display','block');
        }
    });
    //往标签栏中添加标签
    addshow.click(function(){
        var tag=$(this).html();
        var t=false;
        showtags.siblings('span').hide();
        if(showtags.children().length<3){
            for(var i=0;i<=arr.length;i++){
                if(arr[i]==tag){
                    t=true;
                    showtags.siblings('span').html('*该标签已经添加过');
                    showtags.siblings('span').fadeIn("fast",function(){
                        setTimeout(function(){
                            showtags.siblings('span').fadeOut("fast");
                        },500);
                    });
                }
            }
            if(!t){
                showtags.append('<span><b>'+tag+'</b>&nbsp;<i class="delete">x</i></span>');
                $(this).css('background','#C2DCF0');
                arr.push(tag);
                showtags.find('i').bind('click',function(){
                    $(this).parent().remove();
                    for(var j=0;j<=arr.length;j++){
                        if(arr[j]==$(this).siblings('b').html()){
                            arr.splice(j,1);
                        }
                    }
                    var x=$(this).siblings('b').html();//读取删除时标签的内容
                    //console.log(x);
                    $.each(addshow,function(i){
                        if(x==addshow.eq(i).html()){
                            addshow.eq(i).css('background','#e4edf4');
                        }
                    });
                });
            }
        }else{
            showtags.siblings('span').html('*标签最多3个');
            showtags.siblings('span').fadeIn("fast",function(){
                setTimeout(function(){
                    showtags.siblings('span').fadeOut("fast");
                },1000);
            });
        }
    });
    //点击提交表单按钮
    sub.click(function(){
        var json=[{}];
        if(title.val()==0){
            title.siblings('span').css('display','block');
            if(showtags.children().length<=0){
                showtags.siblings('span').html('*标签不能为空').show();
            }
        }else{
            if(showtags.children().length<=0){
                showtags.siblings('span').html('*标签不能为空').show();
            }else{
                $.ajax({
                    type: "POST",
                    url: "",
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify(GetJsonData()),
                    dataType: "json",
                    success: function (message) {
                        if (message > 0) {
                            alert("提问发表成功！");
                        }
                    },
                    error: function (message) {
                        alert("提交数据失败！");
                    }
                });
            }
        }
    });
    var icon=$('.hwq-icon');//下拉框按钮；
    var inp=$('.subject');//专题显示框；
    var h= $('.detaillist');//下拉框列表；
    var subjectlist=$('.detaillist li');
    icon.click(function(){
        h.show()
    });
    inp.click(function(){
        h.show()
    });
    subjectlist.click(function(){
        inp.val($(this).html());
        h.hide();
    });
    //菜单滚动调控件
    h.perfectScrollbar({suppressScrollX: true});
    $(document).mouseup(function(e){
        if(!h.is(e.target) && h.has(e.target).length === 0){
            h.hide();  // 功能代码
        }
    });
});

function GetJsonData() {
    var a=[];
    $('#showtags').find('b').each(function(){
        a.push($(this).html());
    });
    var json = {
        "title": $('.subject').val(),
        "name": $('#title').val(),
        "tag":a
    };
return json;
}