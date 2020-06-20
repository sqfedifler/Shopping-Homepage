 /*广告倒计时*/
(function(){
	let adTop=document.getElementById('adTop');
	let adTopEm=adTop.querySelector('em');
	let adTopII=adTop.querySelector('i');
	let timer=null;
	let num=9;
	
	timer=window.setInterval(()=>{
	  if(num<=0){
		  adTop.classList.add("scrTop");
		  clearInterval(timer);
		  return
	  }
	  switch(num){
		case 9:
			adTopEm.innerHTML='九';
			break;
		case 8:
			adTopEm.innerHTML='八';
			break;		
		case 7:
			adTopEm.innerHTML='七';
			break;	
		case 6:
			adTopEm.innerHTML='六';
			break;	
		case 5:
			adTopEm.innerHTML='五';
			break;
		case 4:
			adTopEm.innerHTML='四';
			break;
		case 3:
			adTopEm.innerHTML='三';
			break;
		case 2:
			adTopEm.innerHTML='二';
			break;
		case 1:
			adTopEm.innerHTML='一';
			break;
	  }
	  num--;
	},1000)
	adTopII.onclick=()=>{
		clearInterval(timer);
		num=0;
		adTop.classList.add("scrTop");
	}
})();


/***************网站导航下拉菜单************************/
(function(){
	let loginRegWebNav=document.querySelector('#loginReg_webNav');
	let loginRegWebNavSpan=loginRegWebNav.querySelector('span');
	let loginRegWebNavUl=loginRegWebNav.querySelector('ul');
	loginRegWebNav.onmouseover=function(){
		loginRegWebNavSpan.classList.add('loginReg_webNav_cur');
		loginRegWebNavUl.style.display="";
	}
	loginRegWebNav.onmouseout=function(){
		loginRegWebNavSpan.classList.remove('loginReg_webNav_cur');
		loginRegWebNavUl.style.display="none";
	}
})();





/***************城市选择***********************/
var areaAll=document.getElementById('areaAll');
var areaUls=areaAll.getElementsByTagName('ul');
var areaLis=areaUls[1].getElementsByTagName('li');
var areaXX=document.getElementById('areaXX');
var areaSpan=document.getElementById('areaDown');
for(var i=0;i<areaLis.length;i++)
{
	areaLis[i].onclick=(function(j){
		return function(){
			//j就是当前li的位置
			if(this.className=='area_cur')
			{
				return;//直接跳出
			}
			var newNum=j,oldNum;
			for(var k=0;k<areaLis.length;k++)
			{
				if(areaLis[k].className=='area_cur')
				{
					oldNum=k;//旧的位置
					break;//跳出循环
				}
			}
			areaLis[newNum].className='area_cur';
			areaLis[oldNum].className='';
			areaUls[newNum+2].style.display='';
			areaUls[oldNum+2].style.display='none';
		}
	})(i);
}

areaXX.onclick=function(){
	areaUp(0);
}
function areaUp(num){
	num+=5;
	if(num<=100)
	{
		areaAll.style.marginTop=-num+'%';
		return setTimeout(function(){areaUp(num);},25);
	}
	else//递归完成
	{
		areaAll.style.display='none';
	}
}

areaSpan.onclick=function(){
	areaDown(0);
}
function areaDown(num){
	if(num==0)
	{
		areaAll.style.display='';
	}
	num+=5;
	if(num<=100)
	{
		areaAll.style.marginTop=(-100+num)+'%';
		return setTimeout(function(){areaDown(num);},25);
	}
}

(function(){
	for(var i=0;i<areaUls.length;i++)
	{
		if(areaUls[i].className=='area_main_nav')
		{
			continue;
		}
		var lis=areaUls[i].getElementsByTagName('li');
		for(var j=0;j<lis.length;j++)
		{
			lis[j].onclick=function(){
				var text=this.innerText || this.textContent;//前者支持IE；后者支持非IE
				areaSpan.getElementsByTagName('i')[1].innerHTML=text;
				areaUp(0);
			}
		}
	}
})();


/*第一块，列表切换*/
(function(){
	var indexOneLnav=document.getElementById('indexOneLnav');
	var indexOneLis=indexOneLnav.getElementsByTagName('li');
	for(var i=0;i<indexOneLis.length;i++)
	{
		indexOneLis[i].onmouseover=(function(j){
			return function(){
				this.className+=' index_one_Lli'+(j+1)+'Cur';
				var chNodes=this.childNodes;
				for(var k=0;k<chNodes.length;k++)
				{
					if(chNodes[k].className=='index_one_LMain')
					{
						chNodes[k].style.display='';
						break;
					}
				}
			}
		})(i);
		
		
		indexOneLis[i].onmouseout=(function(j){
			return function(){
				this.className=this.className.substring(0,this.className.lastIndexOf(' '));
				var chNodes=this.childNodes;
				for(var k=0;k<chNodes.length;k++)
				{
					if(chNodes[k].className=='index_one_LMain')
					{
						chNodes[k].style.display='none';
						break;
					}
				}
			}
		})(i);
	}
})();


/**************幻灯片淡入淡出***********/
(function(){
	var indexOneMFlash=document.getElementById('indexOneMFlash');
	var indexOneMFlashUls=indexOneMFlash.getElementsByTagName('ul');
	var indexOneMFlashU1Lis=indexOneMFlashUls[0].getElementsByTagName('li');//第一个ul下所有的li
	var indexOneMFlashU2Lis=indexOneMFlashUls[1].getElementsByTagName('li');//第二个ul下所有的li
	for(var i=0;i<indexOneMFlashU2Lis.length;i++)
	{
		indexOneMFlashU2Lis[i].onmouseover=(function(j){
			return function(){
				if(this.className=='index_o_mCur')
				{
					return;
				}
				var newNum=j,oldNum;//newNum表示当前位置；oldNum表示之前位置
				for(var k=0;k<indexOneMFlashU2Lis.length;k++)
				{
					if(indexOneMFlashU2Lis[k].className=='index_o_mCur')
					{
						oldNum=k;
					}
				}
				indexOneMFlashU2Lis[newNum].className="index_o_mCur";
				indexOneMFlashU2Lis[oldNum].className="";
				opacityUlFlash(0,newNum,oldNum)
			}
		})(i);
	}
	
	function opacityUlFlash(num,newNum,oldNum){//num表示递归的起始值；newNum表示当前位置；oldNum表示之前位置
		if(num==0)
		{
			indexOneMFlashU1Lis[newNum].className="index_o_mICur";
			indexOneMFlashU1Lis[oldNum].className="";
		}
		num+=10;
		if(num<=100)
		{
			indexOneMFlashU1Lis[newNum].style.opacity=num/100;
			indexOneMFlashU1Lis[newNum].style.filter='alpha(opacity='+num+')';
			indexOneMFlashU1Lis[oldNum].style.opacity=1-num/100;
			indexOneMFlashU1Lis[oldNum].style.filter='alpha(opacity='+(100-num)+')';
			return setTimeout(function(){opacityUlFlash(num,newNum,oldNum);},30);
		}
		
	}
	
	function opacityUlFlashAuto(){
		var newNum,oldNum;//newNum表示当前位置；oldNum表示之前位置
		var last=indexOneMFlashU2Lis.length-1
		for(var x=0;x<indexOneMFlashU2Lis.length;x++)
		{
			if(indexOneMFlashU2Lis[x].className=="index_o_mCur")
			{
				oldNum=x;
			}
		}
		if(oldNum!=last)
		{
			newNum=oldNum+1;
		}
		else
		{
			newNum=0;
		}
		indexOneMFlashU2Lis[newNum].className="index_o_mCur";
		indexOneMFlashU2Lis[oldNum].className="";
		opacityUlFlash(0,newNum,oldNum);
	}
	
	var opacityUlFlashAutoDodo=setInterval(opacityUlFlashAuto,3000);
	
	indexOneMFlash.onmouseover=function(){
		clearInterval(opacityUlFlashAutoDodo);
	}
	indexOneMFlash.onmouseout=function(){
		opacityUlFlashAutoDodo=setInterval(opacityUlFlashAuto,3000);
	}
	
})();


/***第一块右边切换**/
(function(){
	var indexOrUlTit=document.getElementById('indexOrUlTit');
	var indexOrUlTitLis=indexOrUlTit.getElementsByTagName('li');
	var indexOrUlDiv0=document.getElementById('indexOrUlDiv0');
	var indexOrUlDiv1=document.getElementById('indexOrUlDiv1');
	var indexOrUlDivArr=[indexOrUlDiv0,indexOrUlDiv1];
	for(var i=0;i<indexOrUlTitLis.length;i++)
	{
		indexOrUlTitLis[i].onmouseover=(function(j){
			return function(){
				if(this.className=="index_o_rUlTitCur")
				{
					return;//跳出函数
				}
				var newNum=j,oldNum;//newNum当前li的位置;oldNum指旧的位置
				for(var k=0;k<indexOrUlTitLis.length;k++)
				{
					if(indexOrUlTitLis[k].className=="index_o_rUlTitCur")
					{
						oldNum=k;
						break;//跳出循环
					}
				}
				indexOrUlTitLis[newNum].className="index_o_rUlTitCur";
				indexOrUlTitLis[oldNum].className="";
				indexOrUlDivArr[newNum].style.display='';
				indexOrUlDivArr[oldNum].style.display='none';
			}
		})(i);
	}
})();



function trim(str){ //删除左右两端的空格
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

/*******搜索块****/
(function(){
	var searchMain=document.getElementById('searchMain');
	var searchInput=searchMain.getElementsByTagName('input')[0];
	searchInput.onfocus=function(){
		var val=trim(this.value);
		if(val=='请输入您的品牌和机型,看看您的宝贝还值多少钱？')
		{
			this.value='';
			this.style.color='#000';
		}
	}
	
	searchInput.onblur=function(){
		var val=trim(this.value);
		if(val=='')
		{
			this.value='请输入您的品牌和机型,看看您的宝贝还值多少钱？';
			this.style.color='#8c8c8c';
		}
	}
})();


/*******固定搜索块****/
(function(){
	var searchMain=document.getElementById('searchMainFixed');
	var searchInput=searchMain.getElementsByTagName('input')[0];
	searchInput.onfocus=function(){
		var val=trim(this.value);
		if(val=='请输入您的品牌和机型，看看您的宝贝还值多少钱？')
		{
			this.value='';
			this.style.color='#000';
		}
	}
	
	searchInput.onblur=function(){
		var val=trim(this.value);
		if(val=='')
		{
			this.value='请输入您的品牌和机型，看看您的宝贝还值多少钱？';
			this.style.color='#8c8c8c';
		}
	}
	
	
	var searcher=document.getElementById('search');
	var searchFixed=document.getElementById('searchFixed');
	var webHeight=searcher.offsetTop+183;
	window.onscroll=function(){
		var scrollH=document.documentElement.scrollTop+document.body.scrollTop;
		
		if(scrollH>=webHeight)
		{
			searchFixed.style.display='';
		}
		else
		{
			searchFixed.style.display='none';
		}
	}
})();
/*document.documentElement.scrollTop支持IE及ff；+document.body.scrollTop支持chrome\opera等*/

/******产品切换*****/
(function(){
	function qieHuan(ddId,ulId){//ddId表示dd对应父元素div的id,ulId表示ul对应父元素div的id; ddNodes对应dd的数组节点,ulNodes对应ul的数组节点
		var ddNodes=document.getElementById(ddId).getElementsByTagName('dd');
		var ulNodes=document.getElementById(ulId).getElementsByTagName('ul');
		for(var i=0;i<ulNodes.length;i++)
		{
			ddNodes[i].onmouseover=(function(j){
				return function(){
					if(this.className=='pro_l_mLCur')
					{
						return;
					}
					var oldNum,newNum=j;//oldNum指旧的位置,newNum指的是新的位置
					for(var k=0;k<ulNodes.length;k++)
					{
						if(ddNodes[k].className=='pro_l_mLCur')
						{
							oldNum=k;
							
							break;
						}
					}
					this.className="pro_l_mLCur";
					ddNodes[oldNum].className='';
					ulNodes[newNum].style.display='';
					ulNodes[oldNum].style.display='none';
				}
			})(i);
		}
		if(ddNodes[ddNodes.length-1].getAttribute('ul')=='none')
		{
			ddNodes[ddNodes.length-1].onmouseover=function(){
				this.className="pro_l_mLCur";
			}
			ddNodes[ddNodes.length-1].onmouseout=function(){
				this.className="";
			}
		}
		
	}

	
	for(var x=0;x<3;x++)
	{

		qieHuan('product'+x,'productUl'+x);
		
	}
})();




/*/***成交向上移动**/
(function(){
	var productClinch=document.getElementById('productClinch');
	var productClinchLis=productClinch.getElementsByTagName('li');
	function liToTop(num){
		num+=2;
		if(num<=72)
		{
			productClinchLis[0].style.marginTop=-num+'px';
			return setTimeout(function(){liToTop(num);},20);
		}
		else
		{
			productClinch.appendChild(productClinchLis[0]);
			productClinchLis[productClinchLis.length-1].style.marginTop='0px';
		}
	}
	
	var productDo=setInterval(function(){liToTop(0)},2000);
	productClinch.onmouseover=function(){
		clearInterval(productDo);
	}
	productClinch.onmouseout=function(){
		productDo=setInterval(function(){liToTop(0)},2000);
	}
})();

/*客服*/
(function(){
  var kefu=document.getElementById('kefu');
  var backup_btn=kefu.getElementsByTagName('a')[3];
    backup_btn.onclick=function(){
		document.body.scrollTop=document.documentElement.scrollTop=0;
	
 }	  

})();

(function(){
	var NavAll=document.getElementById('NavAll');
	var NavAllLis=NavAll.getElementsByTagName('li');
	
	for(var i=0;i<NavAllLis.length;i++){
		NavAllLis[i].onmouseover=(function(j){	
			return function(){
				
				if(this.className=='nav_li'+(j+1)+' '+'nav_cur'+(j+1)){
					
					return
				}
				var newNum=j+1, oldNum;
				for(var k=0;k<NavAllLis.length;k++){
					if(NavAllLis[k].className=='nav_li'+(k+1)+' '+'nav_cur'+(k+1)){
						oldNum=k;
						break;
					}	
				}
				this.className+=' '+"nav_cur"+newNum;
				
				 NavAllLis[oldNum].className=NavAllLis[oldNum].className.substring(0,NavAllLis[oldNum].className.lastIndexOf(' ')); 
			}

		})(i)	
	}	
})();
















