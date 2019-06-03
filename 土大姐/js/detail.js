$(window).load(function(){
	
	//大图放大镜效果
	$(".jqzoom").jqueryzoom({xzoom:380,yzoom:350,offset:15});
	//修改预览图地址
	$("#spec-list").find("li").live('mouseover',function(){
		$(".jqzoom").children("img").attr("src",$(this).children("img").attr("src"));
	});
	//规格选择
	$(".dd.item-check .item").live('click',function(){
		$(this).addClass("selected").siblings().removeClass("selected");
	});
	//评价切换
	$(".consult-tab li").live('click',function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(".consult-tag .tag").addClass("hidden");
		$(".consult-tag .tag").eq($(this).index()).removeClass("hidden");
	});
	//商品详情
	$("#item-bar li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		var top = $("#"+$(this).data("id")).offset().top -35;
		$(window).scrollTop(top);
	});
	var $top = $("#item-bar").offset().top;
	var pro1 = $("#detail").offset().top -35;
	var pro2 = $("#pro-detail-comment").offset().top -35;
	var pro3 = $("#pro-goods-consult").offset().top -35;
	var pro4 = $("#pro-buy-record").offset().top -35;
	$(window).scroll(function(){
		var doctop = $(document).scrollTop();
		var num = 0;
		if(doctop > $top){
			$("#item-bar").css({position:"fixed", top: "-4px"});
			$("#item-bar").parent().css({paddingTop: "45px"});
			$("#item-bar .item-btn").show();
		}else{
			$("#item-bar").css({position:"absolute", top: "-4px"});
			$("#item-bar").parent().css({paddingTop: "0"});
			$("#item-bar .item-btn").hide();
		}
		if(doctop > pro2) num = 1;
		if(doctop > pro3) num = 2;
		if(doctop > pro4) num = 3;
		$("#item-bar").find("li").eq(num).addClass("current").siblings().removeClass("current");
	});
	//商品查看
	$(".slider-items li").hover(function(){
		$(this).addClass("current").siblings().removeClass("current");
	});
	//倒计时
	$(".original-price .time").each(function(){
			var $time=$(this).data('time');
			$(this).countDown($time)
	});
	//会员价
	$(".summary.original-price").css({left:"0",opacity:"1"}).removeClass("hidden");
	if($(".summary.original-price").hasClass("hidden")){
		$(".service .member-btn").removeClass("hidden");
		$(".service .original-btn").addClass("hidden");
	}
	else{
		$(".service .member-btn").addClass("hidden");
		$(".service .original-btn").removeClass("hidden");
	}
	$(".service .button").live('click',function(){
		if($(this).hasClass("member-btn")){
			$(".summary.original-price").removeClass("hidden");
			$(".summary.member-price").addClass("hidden");
			$(".member-btn").addClass("hidden");
			$(".service .original-btn").removeClass("hidden");
		}
		else{
			$(".summary.member-price").removeClass("hidden");
			$(".summary.original-price").addClass("hidden");
			$(".member-btn").removeClass("hidden");
			$(".service .original-btn").addClass("hidden");
		}
	});
	
})
;(function(){
	$.fn.countDown=function(time){
		var day_elem = this.find('.t_d');
		var hour_elem = this.find('.t_h');
		var minute_elem = this.find('.t_m');
		var second_elem = this.find('.t_s');
		var end_time = new Date(time).getTime(),//月份是实际月份-1
		sys_second = (end_time-new Date().getTime())/1000;
		var timer = setInterval(function(){
		if (sys_second > 1) {
		sys_second -= 1;
		var day = Math.floor((sys_second / 3600) / 24);
		var hour = Math.floor((sys_second / 3600) % 24);
		var minute = Math.floor((sys_second / 60) % 60);
		var second = Math.floor(sys_second % 60);
		day_elem && $(day_elem).text(day<10?"0"+day:day);//计算天
		$(hour_elem).text(hour<10?"0"+hour:hour);//计算小时
		$(minute_elem).text(minute<10?"0"+minute:minute);//计算分钟
		$(second_elem).text(second<10?"0"+second:second);//计算
		} else {
		clearInterval(timer);
		}
		}, 1000);
	}
})(jQuery)
	
