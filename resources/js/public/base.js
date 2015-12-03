/**
 * Created by Administrator on 2015/8/17.
 */
$(function(){
  $('.wx-header-ask').hover(function(){
	  $(this).html('&#xe60d;').css('color','#fff');
  },function(){
	  $(this).html('&#xe615;').css({
		'color':'#fff',
	    'opacity':'.6',
	    'filter':'Alpha(opacity=60)'
	  });
  });

});


function page(opt){
    if(!opt.id){
        return false;
    }
    var obj = document.getElementById(opt.id);
    var nowNum = opt.nowNum || 1;
    var allNum = opt.allNum || 7;
    var callBack = opt.callBack || function(){};

    if(nowNum >=5 && allNum >=8){  //首页出现情况，当前页是第5页并且总页数大于8
        var oA = document.createElement('a');
        oA.href = '#1';
        oA.innerHTML = '首页';
        oA.className = 'page-first';
        obj.appendChild(oA);
    }
    if(nowNum >=2){   //上一页出现情况，当前页大于1
        var oA = document.createElement('a');
        oA.href = '#' + (nowNum -1);
        oA.innerHTML = '上一页';
        oA.className = 'page-prev';
        obj.appendChild(oA);
    }

    if(allNum <= 7){
        for(var i=1;i<=allNum;i++){
            var oA = document.createElement("a");
            oA.href = '#'+i;
            oA.innerHTML = i;
            if(nowNum == i){
                oA.className = 'page-active';
            }else{
                oA.className = '';
            }
            obj.appendChild(oA);
        }
    }else{

        for(var i=1;i<=7;i++){
            var  oA = document.createElement("a");

            if(nowNum==1 || nowNum==2 || nowNum==3){
                oA.href = '#' + i;
                oA.innerHTML = i;
                if(nowNum == i){
                    oA.className = 'page-active';
                }else{
                    oA.className = '';
                }
            }else if((allNum - nowNum)==0 || (allNum - nowNum)==1 || (allNum - nowNum)==2){
                oA.href = '#' + (allNum -7 + i);
                oA.innerHTML = (allNum -7 + i);
                if((allNum - nowNum)==0 && i==7){ //最后一个页码
                    oA.className = 'page-active';
                }else if((allNum - nowNum)==1 && i==6){ //倒数第二个页码
                    oA.className = 'page-active';
                }else if((allNum - nowNum)==2 && i==5){  //倒数第三个页码
                    oA.className = 'page-active';
                }else{
                    oA.className = '';
                }
            }else{
                oA.href = '#' +(nowNum - 4 +i);
                oA.innerHTML = (nowNum - 4 +i);
                if(i==4){
                    oA.className = 'page-active';
                }else{
                    oA.className = '';
                }
            }
            obj.appendChild(oA);
        }

    }
    if((allNum - nowNum)>=1){  //下一页出现情况
        var  oA = document.createElement("a");
        oA.href = '#' + (nowNum +1);
        oA.innerHTML = '下一页';
        oA.className = 'page-next';
        obj.appendChild(oA);
    }
    if((allNum - nowNum)>=4 && allNum>=8){  //尾页出现情况
        var  oA = document.createElement("a");
        oA.href = '#' + allNum;
        oA.innerHTML = '尾页';
        oA.className = 'page-last';
        obj.appendChild(oA);
    }

    callBack(nowNum,allNum);

    var aA = obj.getElementsByTagName("a");
    for(var i=0;i<aA.length;i++){
        aA[i].onclick = function(){
            var nowNum = parseInt(this.getAttribute('href').substring(1));
            obj.innerHTML = '';

            page({
                id : opt.id,
                nowNum : nowNum,
                allNum : allNum,
                callBack:callBack
            });

            return false;
        };
    }
}
