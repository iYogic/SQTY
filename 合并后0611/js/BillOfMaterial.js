       //        定义一个分页方法，可多次调用
       function paginationNick(opt){
        //            参数设置
        var pager={
            mainBox:'',//内容盒子--必填
            paginationBox:'',//分页容器-- 必填
            numBtnBox:'',//数字按钮盒子-- 必填
            btnBox:'',//按钮盒子 --必填
            ipt:'',//input class-- 必填
            goBtn:'',//go btn class --必填
            currentBtn:'',//当前按钮class name --必填
            pageCount:7,//每页显示几条数据
            numBtnCount:3,//当前页左右两边各多少个数字按钮
            currentPage:0,//当前页码data-page，首屏默认值
            maxCount:0,//ajax请求数据分成的最大页码
            data:[]//ajax请求的数据
        };
        pager = $.extend(pager,opt);
        //请求数据页面跳转方法
        function goPage(btn){
            //obj为ajax请求数据
            var obj={other:{},value:[['1','YG11076','P+F','V17-G-PG9','8针头，M12母头 现场连接插头(直头)'],['2','YG11074','P+F','V19-G-20M-PUR-ABG 189542','电缆接头(20米直头)'],['3','SE12152','BANNER','SL030VB6YQPMA13LODO3','BANNER SLO SERIESSLOTSENSOR'],['4','SE12113','WOODHEAD','E11A06005M010','Shielded TPE Industrial Ethernet Brad@ MicroChange@(M12) Double-Ended Cordsets'],['5','SE12114','WOODHEAD','E11A06005M030','空'],['6','SE12115','WOODHEAD','E11A06005M050','Shielded TPE Industrial Ethernet Brad@ MicroChange@(M12) Double-Ended Cordsets'],['7','SG14824','IFM','O2D-222','视觉传感器'],['8','SE12152','BANNER','SL030VB6YQPMA13LODO3','BANNER SLO SERIESSLOTSENSOR'],['9','SE12113','WOODHEAD','E11A06005M010','Shielded TPE Industrial Ethernet Brad@ MicroChange@(M12) Double-Ended Cordsets'],['10','SE12114','WOODHEAD','E11A06005M030','空'],['11','YG11076','P+F','V17-G-PG9','8针头，M12母头 现场连接插头(直头)'],['12','YG11074','P+F','V19-G-20M-PUR-ABG 189542','电缆接头(20米直头)'],['13','SE12152','BANNER','SL030VB6YQPMA13LODO3','BANNER SLO SERIESSLOTSENSOR'],['14','SE12113','WOODHEAD','E11A06005M010','Shielded TPE Industrial Ethernet Brad@ MicroChange@(M12) Double-Ended Cordsets'],['15','SE12114','WOODHEAD','E11A06005M030','空']]};
            //将展示的数据赋值给pager.data  (array)
            pager.data=obj.value;
            //设置ajax请求数据分成的最大页码
            pager.maxCount=pager.data.length % pager.pageCount ? parseInt(pager.data.length / pager.pageCount) +1 :
            pager.data.length / pager.pageCount;

            //设置当前页码
            if(!isNaN(btn)){//数字按钮
                pager.currentPage=parseInt(btn);
            }else{
                switch(btn){
                    case 'first':
                    pager.currentPage=0;
                    break;
                    case 'prev':
                    if(pager.currentPage>0){
                        --pager.currentPage;
                    }
                    break;
                    case 'next':
                    if(pager.currentPage+1<pager.maxCount){
                        ++pager.currentPage;
                    }
                    break;
                    case 'last':
                    pager.currentPage=pager.maxCount-1;
                    break;
                }
            }
            //创建数字按钮
            createNumBtn(pager.currentPage);
            //赋值给页码跳转输入框的value，表示当前页码
            $('.'+pager.btnBox+' .'+pager.ipt).val(pager.currentPage+1);
//              内容区填充数据
var arr=[],str='';
str='<tr><th class="ID">序号<div class="line"></div></th><th class="number">物料号<div class="line"></div></th><th class="brand">品牌<div class="line"></div></th><th class="model">型号<div class="line"></div></th><th class="notes">注释</th></tr>';
arr=pager.data.slice(pager.pageCount*pager.currentPage,
    pager.data.length - pager.pageCount*(pager.currentPage+1) > -1 ?
    pager.pageCount*(pager.currentPage+1) : pager.data.length);
arr.forEach(function(v){

    str+='<tr><td style="width:10%;">'+v[0]+'</td><td style="width:10%;">'+v[1]+'</td><td style="width:13%; margin-left:2%;">'+v[2]+'</td><td style="width:18%; margin-left:2%;">'+v[3]+'</td><td style="width:43%; margin-left:2%;">'+v[4]+'</td></tr>';
});
$('.'+pager.mainBox).html(str);
}
        //创建非数字按钮和数据内容区
        function createOtherBtn(){
            $('.'+pager.paginationBox).html('<div class="'+pager.mainBox+'"></div><div class="'+pager.btnBox+'"><button data-page="first" class="first-btn">首页</button><button data-page="prev" class="prev-btn">上一页</button><span class="'+pager.numBtnBox+'"></span><button data-page="next" class="next-btn">下一页</button><input type="text" placeholder="请输入页码" class="'+pager.ipt+'"><button class="'+pager.goBtn+'">GO</button><button data-page="last" class="last-btn">尾页</button></div>');
            //ipt value变化并赋值给go btn data-page
            $('.'+pager.btnBox+' .'+pager.ipt).change(function(){
                if(!isNaN($(this).val())){//是数字
                    if($(this).val() > pager.maxCount){//限制value最大值，跳转尾页
                        $(this).val(pager.maxCount);
                    }
                    if($(this).val()<1){//限制value最小值，跳转首页
                        $(this).val(1);
                    }
                }else{//非数字清空value
                    $(this).val('');
                }
                $('.'+pager.btnBox+' .'+pager.goBtn).attr('data-page',$(this).val() ? $(this).val()-1 : '');
            });
            //每个btn绑定请求数据页面跳转方法
            $('.'+pager.btnBox+' button').each(function(i,v){
                $(this).click(function(){
                    //有值且不是上一次的页码时才调用
                    if(v.getAttribute('data-page') && v.getAttribute('data-page') != pager.currentPage){
                        goPage(v.getAttribute('data-page'));
                    }
                });
            });
        }
        //创建数字按钮
        function createNumBtn(page){
            //page是页面index从0开始，这里的page加减一要注意
            var str='';
            if(pager.maxCount>pager.numBtnCount*2){//若最大页码数大于等于固定数字按钮总数（pager.numBtnCount*2+1）时
                //此页左边右边各pager.numBtnCount个数字按钮
                if(page-pager.numBtnCount>-1){//此页左边有pager.numBtnCount页 page页码从0开始
                    for(var m=pager.numBtnCount;m>0;m--){
                        str+='<button data-page="'+(page-m)+'">'+(page-m+1)+'</button>';
                    }
                }else{
                    for(var k=0;k<page;k++){
                        str+='<button data-page="'+k+'">'+(k+1)+'</button>';
                    }
                }
                str+='<button data-page="'+page+'" class="'+pager.currentBtn+'" disabled="disabled">'+(page+1)+'</button>';//此页
                if(pager.maxCount-page>3){//此页右边有pager.numBtnCount页 page页码从0开始
                    for(var j=1;j<pager.numBtnCount+1;j++){
                        str+='<button data-page="'+(page+j)+'">'+(page+j+1)+'</button>';
                    }
                }else{
                    for(var i=page+1;i<pager.maxCount;i++){
                        str+='<button data-page="'+i+'">'+(i+1)+'</button>';
                    }
                }
                /*数字按钮总数小于固定的数字按钮总数pager.numBtnCount*2+1时，
                这个分支，可以省略*/
                if(str.match(/<\/button>/ig).length<pager.numBtnCount*2+1){
                    str='';
                    if(page<pager.numBtnCount){//此页左边页码少于固定按钮数时
                        for(var n=0;n<page;n++){//此页左边
                            str+='<button data-page="'+n+'">'+(n+1)+'</button>';
                        }
                        str+='<button data-page="'+page+'" class="'+pager.currentBtn+'" disabled="disabled">'+(page+1)+'</button>';//此页
                        for(var x=1;x<pager.numBtnCount*2+1-page;x++){//此页右边
                            str+='<button data-page="'+(page+x)+'">'+(page+x+1)+'</button>';
                        }
                    }
                    if(pager.maxCount-page-1<pager.numBtnCount){
                        for(var y=pager.numBtnCount*2-(pager.maxCount-page-1);y>0;y--){//此页左边
                            str+='<button data-page="'+(page-y)+'">'+(page-y+1)+'</button>';
                        }
                        str+='<button data-page="'+page+'" class="'+pager.currentBtn+'" disabled="disabled">'+(page+1)+'</button>';//此页
                        for(var z=page+1;z<pager.maxCount;z++){//此页右边
                            str+='<button data-page="'+z+'">'+(z+1)+'</button>';
                        }
                    }
                }
            }else{
                str='';
                for(var n=0;n<page;n++){//此页左边
                    str+='<button data-page="'+n+'">'+(n+1)+'</button>';
                }
                str+='<button data-page="'+page+'" class="'+pager.currentBtn+'" disabled="disabled">'+(page+1)+'</button>';//此页
                for(var x=1;x<pager.maxCount-page;x++){//此页右边
                    str+='<button data-page="'+(page+x)+'">'+(page+x+1)+'</button>';
                }
            }

            $('.'+pager.numBtnBox).html(str);

            //每个btn绑定请求数据页面跳转方法
            $('.'+pager.numBtnBox+' button').each(function(i,v){
                $(this).click(function(){
                    goPage(v.getAttribute('data-page'));
                });
            });

            //按钮禁用
            $('.'+pager.btnBox+' button').not('.'+pager.currentBtn).attr('disabled',false);
            if(!page){//首页时
                $('.'+pager.btnBox+' .first-btn').attr('disabled',true);
                $('.'+pager.btnBox+' .prev-btn').attr('disabled','disabled');
            }
            if(page==pager.maxCount-1){//尾页时
                $('.'+pager.btnBox+' .last-btn').attr('disabled',true);
                $('.'+pager.btnBox+' .next-btn').attr('disabled',true);
            }
        }

        //首屏加载
        createOtherBtn();//首屏加载一次非数字按钮即可
        goPage();//请求数据页面跳转满足条件按钮点击都执行，首屏默认跳转到currentPage
    }
    //调用
    paginationNick({
        mainBox:'main-box-nick',//内容盒子--必填
        paginationBox:'pagination-nick',//分页容器--必填
        numBtnBox:'num-box-nick',//数字按钮盒子-- 必填
        btnBox:'btn-box-nick',//按钮盒子 --必填
        ipt:'page-ipt-nick',//input class-- 必填
        goBtn:'go-btn-nick',//go btn class --必填
        currentBtn:'active-nick'//当前按钮class name --必填
    });
