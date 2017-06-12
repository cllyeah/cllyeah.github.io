/*the scroll bar to the top if refresh the page*/
$(function(){
    $(window).scrollTop(0)
});
/*when the width less than 991px, hide the hider*/
$(document).ready(function(){
	$('.navbar-toggle').click(function(){
		$('#header, .btn-left').toggleClass('active');
	});

	/*导航栏点击后自动隐藏*/
	var width = $(document).width();
	if(width < 991)
		$('nav a').click(function(){
			$('#header, .btn-left').removeClass('active');
		});
});

//skill bar
jQuery('.skillbar').each(function(){
	jQuery(this).appear(function(){
		jQuery(this).find('.count-bar').animate({
		  width:jQuery(this).attr('data-percent')
		},3000);
		var percent = jQuery(this).attr('data-percent');
		jQuery(this).find('.count').html('<span>' + percent + '</span>');
	});
});

/*Experience*/

$(document).ready(function(){
	$('.item').click(function(){
		$('.item').eq($(this).index()).addClass('selected').siblings().removeClass('selected');
		$('.expe-content').fadeOut().eq($(this).index()).fadeIn();
	});
});

$(document).ready(function(){
	$('.banner').mouseover(function(e){
		var t=e.clientX, 
		    n=e.clientY,
		    left=$('.banner')[0].getBoundingClientRect().left,
		    top=$('.banner')[0].getBoundingClientRect().top,
		    /*i = t - left - 750/2,
		    r = n - top - 350/2;*/
		    i = 750/2 - n + top +140,
		    r = t - left - 350/2;
		$(this).css("transform","rotateX(" + i/100 + "deg) rotateY(" + r/100 + "deg)");
	});
});

/*portfolio*/
$(document).ready(function(){
	$('.themeMax').hover(function(){
		$(this).find('.themeImg').css({'height':$(this).find('img').height() + 'px'});
	}, function(){
		$(this).find('.themeImg').height(250);
	});
});

/*页面平滑跳转*/
$(document).ready(function(){
	$('#top-link').click(function(){
		$(this).addClass('active').parent().siblings().children('a').removeClass('active');
		$("html,body").animate({scrollTop: $("#top").offset().top}, 1000);
	});
	$('#about-link').click(function(){
		$(this).addClass('active').parent().siblings().children('a').removeClass('active');
		$("html,body").animate({scrollTop: $("#about").offset().top}, 1000);
	});
	$('#skill-link').click(function(){
		$(this).addClass('active').parent().siblings().children('a').removeClass('active');
		$("html,body").animate({scrollTop: $("#skill").offset().top}, 1000);
	});
	$('#expe-link').click(function(){
		$(this).addClass('active').parent().siblings().children('a').removeClass('active');
		$("html,body").animate({scrollTop: $("#expe").offset().top}, 1000);
	});
	$('#portfolio-link').click(function(){
		$(this).addClass('active').parent().siblings().children('a').removeClass('active');
		$("html,body").animate({scrollTop: $("#portfolio").offset().top}, 1000);
	});
	$('#contact-link').click(function(){
		$(this).addClass('active').parent().siblings().children('a').removeClass('active');
		$("html,body").animate({scrollTop: $("#contact").offset().top}, 1000);
	});

	/*导航栏自动识别用户所浏览位置并改变样式*/
	$(window).scroll(scrollto);
	function scrollto(){
		var scroll_top = $(window).scrollTop();
		if(scroll_top >= 0 && scroll_top<300)
			$('#top-link').addClass('active').parent().siblings().children('a').removeClass('active');
		else if(scroll_top > 300 && scroll_top<=960)
			$('#about-link').addClass('active').parent().siblings().children('a').removeClass('active');
		else if(scroll_top > 960 && scroll_top<=1630)
			$('#skill-link').addClass('active').parent().siblings().children('a').removeClass('active');
		else if(scroll_top > 1630 && scroll_top<=2350)
			$('#expe-link').addClass('active').parent().siblings().children('a').removeClass('active');
		else if(scroll_top > 2350 && scroll_top<=3010)
			$('#portfolio-link').addClass('active').parent().siblings().children('a').removeClass('active');
		else
			$('#contact-link').addClass('active').parent().siblings().children('a').removeClass('active');
	}

});