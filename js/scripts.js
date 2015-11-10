$(function(){
	var $logo = $('.loader figure');
	var $btn = $('#btn');
	var $menu = $('[data="nav"]');
	var $micro = $('[alt="micro"]');
	var $body = $('body');
	$logo.animate({
		'margin-top':'30em',
		'opacity':'0'},2000,function(){
			$logo.parent().css('display','none');
		});
	$btn.on('click',function(){
		$menu.slideToggle();
	})
	$micro.on('click',function(){
		$(this).css({
			'opacity':'0'
		});
		$body.css({
			'background-image':' url(../img/microBack.svg)'
		});
	})
});
