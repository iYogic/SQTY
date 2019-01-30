
$(document).ready(function(){
	$(".icdoSpan-true").click(function(){
		$(".imcnCon-divOne").css({"border":"1px solid #fe3b3c"});
		$(".icdoSpan-true").css({"background-color":"#fe3b3c",
			"color":"#fff"});
		$(".icdoSpan-false").css({"background-color":"#fff",
			"color":"#000"});
	});
	$(".icdoSpan-false").click(function(){
		$(".imcnCon-divOne").css({"border":"1px solid #598bfc"});
		$(".icdoSpan-true").css({"background-color":"#fff",
			"color":"#000"});
		$(".icdoSpan-false").css({"background-color":"#598bfc",
			"color":"#fff"});
	});
	$(".ictdoSpan-true").click(function(){
		$(".imcnContwo-divOne").css({"border":"1px solid #fe3b3c"});
		$(".ictdoSpan-true").css({"background-color":"#fe3b3c",
			"color":"#fff"});
		$(".ictdoSpan-false").css({"background-color":"#fff",
			"color":"#000"});
	});
	$(".ictdoSpan-false").click(function(){
		$(".imcnContwo-divOne").css({"border":"1px solid #598bfc"});
		$(".ictdoSpan-true").css({"background-color":"#fff",
			"color":"#000"});
		$(".ictdoSpan-false").css({"background-color":"#598bfc",
			"color":"#fff"});
	});
});

   
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
		document.getElementsByClassName("pficd-spanTime")[0].innerHTML = msg;
		--maxTime;
	} else {
		clearInterval(timer); 
		// alert("时间到，结束!"); 
	}
}
timer = setInterval("CountDownTime()",1000);
