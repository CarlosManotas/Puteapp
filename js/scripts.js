$(function(){
	var $logo           = $('.loader figure');
	var $btn            = $('#btn');
	var $btn2           = $('#btnMano');
	var $menu           = $('[data="nav"]');
	var $micro          = $('[alt="micro"]');
	var $body           = $('body');
	var $centroMicro    = $(".microBack");
	var $btnMensaje     = $("form textarea[placeholder='escribi aqui']");
	var $pantalla       = $(window);
	var $back 			= $("#back");
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
	$btn2.on('click',function(){
		$btnMensaje.parent().css({'display':'block'});
		$body.css({'overflow':'hidden'});
		$body.removeClass('microBack');
		$pantalla.scrollTop(0);
		$back.css("visibility","visible");
	});
	$btnMensaje.on('click',function(){
		$(this).css({
			'margin-top':'3em',
			'min-height':'250px',
			'background-color':'#56595A'
		});
		$body.css('overflow','hidden');
	});
	$btnMensaje.next().on('click',function(){
		$(this).parent().parent().css('display','none');
		$body.css({'overflow-y':'scroll','overflow-x':'hidden'});
	})
	$back.on('click',function(){
		$(this).css('visibility','hidden');
		$body.css({'overflow-y':'scroll','overflow-x':'hidden'});
		$btnMensaje.parent().css('display','none');
		$micro.removeClass("opacity0");
		$body.removeClass("microBack");
	});
});
