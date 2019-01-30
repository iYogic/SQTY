
	// $(document).ready(function(){
	// 	//浏览器当前窗口可视区域宽度
	// 	//alert($(window).width());
	// 	$(window).resize(function(){
	// 		var width=($(window.width());
	// 		$(".toolBar").css("width",width);
	// 	})
	// });
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    option = {
    	color: ['#FFD83B', '#FF3B3C', '#CB4925', '#FE893A'],
    	title: {
    		text: '错误数量'
    	},
    	tooltip: {},
    	legend: {
    		data:['机器人','工艺滑台','FDS','铝阻焊'],
    	},
    	xAxis: {
    		data: ["12.12","12.13","12.14","12.15","12.16","12.17","12.18"]
    	},
    	yAxis: {},
    	series: [{
    		name: '机器人',
    		type: 'bar',
    		data: [19,19,19,19,19,19,19]
    	},{
    		name: '工艺滑台',
    		type: 'bar',
    		data: [8, 8, 8, 8, 8, 8,8]
    	},{
    		name: 'FDS',
    		type: 'bar',
    		data: [17,17,17,17,17,17,17]
    	},{
    		name: '铝阻焊',
    		type: 'bar',
    		data: [8,8,8,8,8,8,8]
    	}]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    