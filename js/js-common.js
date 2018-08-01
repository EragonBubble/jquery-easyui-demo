$('.js-ui-menu-close-icon').click(function(){
	var menuWidth = $('.js-ui-menu').width();
	console.log("[.js-ui-menu] width ", menuWidth);
	if (menuWidth < 100) {
		$('.js-ui-menu').animate({'width': '138px'});
		$('.js-ui-menu-close-icon').animate({'left': '138px'});
	} else {
		$('.js-ui-menu').animate({'width': '28px'});
		$('.js-ui-menu-close-icon').animate({'left': '28px'});
	}
})
