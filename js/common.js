$(function () {
	// wingBannerWrap
	$(window).scroll(function () {
		const scrollY = $(window).scrollTop();
		const wingScroll = $('.wingBannerWrap');

		if (scrollY == $(document).height() - $(window).height()) {
			wingScroll.addClass('scroll');
		} else {
			wingScroll.removeClass('scroll');
		}
	});

	// topBtn
	$('.top_btn').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 300);
		return false;
	});

	var sitemap = $('#header .sitemap');

	$('.btn_site').click(function () {
		sitemap.addClass('on');
		$('body').addClass('body_bg');
		console.log('click');
	});

	$('.close_btn').click(function () {
		sitemap.removeClass('on');
		$('body').removeClass('body_bg');
	});

	$('.sitemap li a').click(function () {
		sitemap.removeClass('on');
		$('body').removeClass('body_bg');
	});
});
