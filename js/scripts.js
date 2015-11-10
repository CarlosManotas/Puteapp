$(function(){
	var $logo           = $('.loader figure');
	var $btn            = $('#btn');
	var $menu           = $('[data="nav"]');
	var $micro          = $('[alt="micro"]');
	var $body           = $('body');
	var $centroMicro    = $(".microBack");
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
});
