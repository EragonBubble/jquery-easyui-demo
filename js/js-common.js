$(function() {
	var h=document.documentElement.clientHeight;//可见区域高度
	$('.js-ui-menu-close-icon').css({ 'top': h/2 });
});

$('.js-ui-menu-close-icon').click(function(){
	var menuWidth = $('.js-ui-menu').width();
	if (menuWidth < 100) {
		$('.js-ui-menu').animate({'width': '145px'});
		$('.js-ui-menu-close-icon').animate({'left': '155px'});
		$('.js-ui-menu-close-icon').text('<');
		$('.js-ui-container').animate({'margin-left': '155px'});
		$('.js-ui-logo').fadeIn();
		$('.js-ui-menu-title').fadeIn();
	} else {
		$('.js-ui-menu').animate({'width': '28px'});
		$('.js-ui-menu-close-icon').animate({'left': '38px'});
		$('.js-ui-menu-close-icon').text('>');
		$('.js-ui-container').animate({'margin-left': '38px'});
		$('.js-ui-logo').fadeOut();
		$('.js-ui-menu-title').fadeOut();
	}
});
