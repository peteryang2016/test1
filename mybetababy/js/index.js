// JavaScript Document
$(document).ready(function (){
	
});
function show(obj){
	var obj=document.getElementById(obj); //获得id为menu的容器
	//如果下面的内容显示的话就隐藏
	if(obj.style.display=="block"){
	obj.style.display="none";
	}else 
	obj.style.display="block";
}