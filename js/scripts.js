$(function(){
	var $logo           = $('.loader figure');
	var $btn            = $('#btn');
	var $btnManual      = $('#btnManual');
	var $menu           = $('[data="nav"]');
	var $micro          = $('[alt="micro"]');
	var $body           = $('body');
	var $centroMicro    = $(".microBack");
	var $btnMensaje     = $("#input-10");
	var $pantalla       = $(window);
	var $back 			= $("#back");
	var $grabar         = $("#grabar");
	var $topMicro;
	
	$logo.animate({
		'margin-top':'30em',
		'opacity':'0'},2000,function(){
			$logo.parent().css('display','none');
		});
	$btn.on('click',function(){
		$menu.slideToggle();
	})
	$micro.on('click',function(){
		$(this).toggleClass("opacity0");
		$body.toggleClass("microBack");
		$topMicro = $micro.children().position().top;
		$body.css({
			"background-position-y": ($topMicro - 245) + "px"
		});
	})
	$btnManual.on('click',function(){
		$body.css({'overflow':'hidden'});
		$body.removeClass('microBack');
		$back.css("visibility","visible");
		$grabar.css({"marginLeft":"-100vw"});
	});
	$btnMensaje.on('click',function(){
		$(this).animate({
			'min-height':'250px'
		},1000);
	});
	$btnMensaje.next().on('click',function(){
		$(this).parent().parent().css('display','none');
	})
	$back.on('click',function(){
		$(this).css('visibility','hidden');
		$micro.removeClass("opacity0");
		$body.removeClass("microBack");
		$grabar.css({"marginLeft":"0"});
	});
});
