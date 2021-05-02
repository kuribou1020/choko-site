$(function() {

    $('.question a').on('click', function(e) {
        e.preventDefault();
        const xAnswer = $(e.target)
        .closest('section')
        .find('.answer');
        if($(xAnswer).hasClass('open')) {
            $(xAnswer).slideUp();
            $(xAnswer).removeClass('open');
        } else {
            $(xAnswer).slideDown();
            $(xAnswer).addClass('open');
        };
        $(this).toggleClass('active');
    });

    var mySwiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        slidesPerView: 1.5,
        centeredSlides: true,
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            reverseDirection: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            1000: {
                slidesPerView: 3,
            }
        }
    });

    $('.gnav a').on('click', function() {
		var nav = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(nav).offset().top
		}, 500);
	});

    $(window).scroll(function() {
        $('.anim').each(function () {
            var offsetTop = $(this).offset().top;
            var scrollTop = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scrollTop > offsetTop - windowHeight) {
                $(this).addClass('show');
            }
        });
    });

    var showText = $('.title-name');
    var speed = 180;
    var textNum = 0;
    showText.css({opacity: 1});
    $(window).ready(function () {
        setInterval(function() {
            showText.find('span').eq(textNum).css({opacity: 1});
            textNum++
        }, speed);
    });

    var df1 = $('.dogfoot1');
    var df2 = $('.dogfoot2');
    $(window).ready(function () {
        setTimeout(function () {
            df1.css('opacity', 1)
        }, 2400);
        setTimeout(function () {
            df2.css('opacity', 1)
        }, 2800);
        $('.top-imgbox').addClass('show');
    });

});