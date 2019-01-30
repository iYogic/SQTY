  
var maxTime = 1800;
function CountDownTime() {
if (maxTime >=0) {
var minutes = parseInt(maxTime/60%60, 10); //计算剩余的分钟            
var seconds = parseInt(maxTime%60, 10); //计算剩余的秒数
var strM=minutes.toString();
var strS=seconds.toString();
if(strS.length<2)
strS='0'+strS;
if(strM.length<2)
strM='0'+strM;
msg =strM+":"+strS;
document.getElementsByClassName("pfcd-spanTime")[0].innerHTML = msg;
--maxTime;
} else {
clearInterval(timer); 
// alert("时间到，结束!"); 
}
}
timer = setInterval("CountDownTime()",1000);


$(document).ready(function(){
$(".conRobotlFiOne").click(function(){
$(this).addClass("greenSpan").siblings().removeClass("blueSpan redSpan");			
});
$(".conRobotlFiTwo").click(function(){
$(this).addClass("blueSpan").siblings().removeClass("greenSpan redSpan");
});
$(".conRobotlFiThree").click(function(){
$(this).addClass("redSpan").siblings().removeClass("greenSpan blueSpan");
});
$(".conCFlistFiOne").click(function(){
$(this).addClass("greenSpan").siblings().removeClass("blueSpan redSpan");			
});
$(".conCFlistFiTwo").click(function(){
$(this).addClass("blueSpan").siblings().removeClass("greenSpan redSpan");
});
$(".conCFlistFiThree").click(function(){
$(this).addClass("redSpan").siblings().removeClass("greenSpan blueSpan");
});
$(".conFDSlFiOne").click(function(){
$(this).addClass("greenSpan").siblings().removeClass("blueSpan redSpan");			
});
$(".conFDSlFiTwo").click(function(){
$(this).addClass("blueSpan").siblings().removeClass("greenSpan redSpan");
});
$(".conFDSlFiThree").click(function(){
$(this).addClass("redSpan").siblings().removeClass("greenSpan blueSpan");
});
$(".conARWlFiOne").click(function(){
$(this).addClass("greenSpan").siblings().removeClass("blueSpan redSpan");			
});
$(".conARWlFiTwo").click(function(){
$(this).addClass("blueSpan").siblings().removeClass("greenSpan redSpan");
});
$(".conARWlFiThree").click(function(){
$(this).addClass("redSpan").siblings().removeClass("greenSpan blueSpan");
});
});
