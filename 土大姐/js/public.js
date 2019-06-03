$(function(){
	//分类导航
	$(".category-wrap").hover(function(){
		$(this).children(".dd").show();
	},function(){
		$(this).children(".dd").hide();
		$(this).children(".dd").find(".item").removeClass("selected");
	});
	$(".category-wrap .dd").hover(function(){
		$(".droplayer-wrap").stop().animate({"left":"220px"},400).show();
	},function(){
		$(".dd-inner li").removeClass("bg-black");
		$(".droplayer-wrap").stop().animate({"left":"2px"},400).hide();
	});
	$(".dd-inner li").hover(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		$(".droplayer-text .item-sub").eq($(this).index()).show().siblings().hide();
	});
	//加减数量
	$(".adjust .adjust-reduce").live('click',function(){
		adjust($(this));
	});
	$(".adjust .adjust-add").live('click',function(){
		adjust($(this));
	});
	$(".adjust .adjust-input").live('keyup',function(){
		var val = $(this).val();
        var val2 = val.replace(/[^\d]/g, '');
        var min = parseInt($(this).attr("data-min"));
		var max = parseInt($(this).attr("data-max"));
		if($(this).attr("data-min")==undefined){
			min = 0
		}else if($(this).attr("data-max")==undefined){
			min = 999
		}
        if(val2<=min){
        	val2 = min;
        }else if(val2>=max){
        	val2 = max;
        }
        $(this).val(val2);
        disabledAdjustBtn($(this).parents(".adjust"),min,max);
	});
	function adjust(o){
		var _input = o.parents(".adjust").find(".adjust-input");
		var min = parseInt(_input.attr("data-min"));
		var max = parseInt(_input.attr("data-max"));
		if(_input.attr("data-min")==undefined){
			min = 0
		}else if(_input.attr("data-max")==undefined){
			min = 999
		}
		if(o.hasClass('adjust-reduce')&&_input.val()>min){
			_input.val(_input.val()-1)
		}else if(o.hasClass('adjust-add')&&_input.val()<max){
			_input.val(parseInt(_input.val())+1)
		}
		disabledAdjustBtn(o.parents(".adjust"),min,max);
	}
	function disabledAdjustBtn(p,min,max){
		if(p.find(".adjust-input").val()==min){
			p.find(".adjust-reduce").addClass("disabled");
			p.find(".adjust-add").removeClass("disabled");
		}else if(p.find(".adjust-input").val()==max){
			p.find(".adjust-add").addClass("disabled");
			p.find(".adjust-reduce").removeClass("disabled");
		}else{
			p.find(".adjust-add").removeClass("disabled");
			p.find(".adjust-reduce").removeClass("disabled");
		}
		return false;
	}
	//侧栏
	$(".ibar-mp-center li").hover(function(){
		$(this).find(".ibar-tooltip").stop().animate({right: "35px"},300).addClass("show");
	},function(){
		$(this).find(".ibar-tooltip").stop().animate({right: "45px"},300).removeClass("show");
	});
	 $(".ibar-top").click(function(){
    	$('html, body').animate({ scrollTop: 0 },300);
    })
	
	//购物车删除
	$(".ibar-con .delete").click(function(){
		$(this).parent().parent().remove();
	});
	$(".ibar-btn-item .current").live('click',function(event){
		event.stopPropagation();
		var child=$(this).closest(".ibar-btn-item").find(".ibar-tooltip-center");
		var parent=$(this).closest(".ibar-btn-item");
		if(child.css("right")=="-300px"){
			$(".side-bar").stop().animate({right:"300px"},300);
			parent.siblings().find(".ibar-tooltip-center").stop().animate({right:"-300px"},300);
			child.stop().animate({right:"0"},300);
			$(".ibar-show-bg").stop().animate({right:"0"},300);
			parent.addClass("selected").siblings().removeClass("selected");
			
		}
		else{
			$(".side-bar").stop().animate({right:"0"},300);
			$(".ibar-show-bg").stop().animate({right:"-300"},300);
			child.stop().animate({right:"-300px"},300);
			parent.removeClass("selected")
		}
		
	});
	
	//清空购物车
	  $(".clear-cart").click(function(){
	    var parent=$(this).closest(".ibar-tooltip-center");
	    parent.find("li").remove();
	  })
	var show=$(".ibar-btn-item").find(".ibar-tooltip-center");
	var open=$(".ibar-btn-item").find(".ibar-tooltip");
	show.hover(function(){
		open.css("opacity","0");
	},function(){
		open.css("opacity","1");
	});
	//侧栏
	$(".stop-pro").click(function(event){
	    event.stopPropagation();
	  });
	  
	  $(document).click(function(event){
	    var parent=$(".ibar-btn-item.selected");
	    var child=parent.find(".ibar-tooltip-center");
	    var child_second=parent.find(".ibar-btn-item");
	    if(parent){
	      $(".side-bar").stop().animate({right:"0"},300);
	      $(".ibar-show-bg").stop().animate({right:"-300"},300);
	      child.stop().animate({right:"-300px"},300);
	    
	    }
	      $(".ibar-btn-item").removeClass("selected");
	  })
	//左侧分类
	$(".sp-category dl dt").live('click',function(){
		if(!$(this).parents("dl").hasClass("open")){
			$(this).parents("dl").addClass("open");
		}else{
			$(this).parents("dl").removeClass("open");
		}
	});
	//评价图片
	$(".input").each(function(){
		var parent=$(this).parents(".content");
		$(this).focus(function(){			
			parent.find(".icon-email").css("background-position","-122px 1px");
			parent.find(".icon-mobile").css("background-position","-85px 0");
			parent.find(".icon-name").css("background-position","-22px -105px");
			parent.find(".icon-pwd").css("background-position","-58px -105px");
			parent.find(".icon-verify").css("background-position","-101px -105px");
			
		});
		$(this).blur(function(){
			parent.find(".icon-email").css("background-position","-101px 1px");
			parent.find(".icon-mobile").css("background-position","-70px 0");
			parent.find(".icon-name").css("background-position","-3px -105px");
			parent.find(".icon-pwd").css("background-position","-40px -105px");
			parent.find(".icon-verify").css("background-position","-80px -105px");
		});
	
	});
	$(".widget-carousel-content ul li").live('click',function(){
		var _parent = $(this).parents(".widget-carousel-content");
		var _next = _parent.next(".widget-carousel-box");
		if(_next.find("img").length<=0){
			_parent.find("img").each(function(i){
				_next.append('<img data-ind="'+i+'" src="'+$(this).attr("src")+'" />');
			});
		}
		_next.find("img").eq($(this).index()).show().siblings("img").hide();
		if(!$(this).hasClass("current")){
			$(this).addClass("current").siblings("li").removeClass("current");
			_next.slideDown(300);
		}else{
			$(this).removeClass("current");
			_next.slideUp(300);
		}
		return false;
	});
	$(".widget-carousel-box .prev").live('click',function(){
		var ind = 0;
		var _img = $(this).parent().find("img");
		var _len = _img.length;
		_img.each(function(i){
			if($(this).css("display")!='none') ind = i;
		});
		ind--;
		if(ind<0) ind = _len-1;
		_img.eq(ind).show().siblings("img").hide();
		$(this).parent().prev().find("li").eq(ind).addClass("current").siblings("li").removeClass("current");
		return false;
	});
	
	$(".widget-carousel-box .next").live('click',function(){
		var ind = 0;
		var _img = $(this).parent().find("img");
		var _len = _img.length;
		_img.each(function(i){
			if($(this).css("display")!='none') ind = i;
		});
		ind++;
		if(ind>_len-1) ind = 0;
		_img.eq(ind).show().siblings("img").hide();
		$(this).parent().prev().find("li").eq(ind).addClass("current").siblings("li").removeClass("current");
		return false;
	});
	
});
/*右侧侧边栏返回顶部出现或消失*/
	$(window).scroll(function(){
		var scrollTop=$(document).scrollTop();
		if(scrollTop>0){
			$(".ibar-top").show();
		}else{
			$(".ibar-top").hide();
		}
	});
//倒计时
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