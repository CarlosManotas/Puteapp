$(function(){
	var $logo = $('.loader figure');
	var $btn = $('#btn');
	var $menu = $('[data="nav"]');
	$logo.animate({
		'margin-top':'30em',
		'opacity':'0'},2000,function(){
			$logo.parent().css('display','none');
		});
	$btn.on('click',function(){
		$menu.slideToggle();
	})
});