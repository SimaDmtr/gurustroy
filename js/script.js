
$(document).ready(function () {
    var navItem = $('.navigation-item-wrap');

    $('.fourth-screen-tabs').slick({
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true,
        fade: true,

        infinite: false,
        draggable: false,
        swipe: false
    })
    $(navItem).click(function () {
        var navItemIndex = $(this).index();
        $('.fourth-screen-tabs').slick('slickGoTo', navItemIndex)
        $(navItem).removeClass('navigation-item-wrap--active');
        $(this).addClass('navigation-item-wrap--active');
    })
    $('input[type="tel"]').mask("+375 (99)-999-99-99");
    $('.fotorama').fotorama({
        allowfullscreen: true,
        thumbborderwidth: 0,
        minheight: 500,
        minwidth: '100%',
        navwidth: '100%',
        thumbwidth: 230,
        thumbmargin: 15,

        thumbheight: 160,
        transition: 'crossfade',
        spinner: {
            lines: 13,
            color: 'rgba(0, 0, 0, .75)'
        },
        ratio: 16 / 9

    });
    $('.project-block-wrap').slick({
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true,
        infinite: false,
        draggable: false,
        swipe: false
    });
    var currentSlide = $('.project-block-wrap').slick('slickCurrentSlide');

    $('.project-block-wrap').on('afterChange', function (event, slick, currentSlide) {

        $('.project-nav__count__current')[0].innerHTML = currentSlide + 1;
    });

    $('.project-nav__count__current')[0].innerHTML = currentSlide + 1;
    var slidesCount = $('.project-block-wrap .slick-slide:not(.slick-cloned)').length;
    if (slidesCount < 10) {
        $('.project-nav__count__total')[0].innerHTML = '0' + slidesCount;
    } else {
        $('.project-nav__count__total')[0].innerHTML = +slidesCount;
    }
    $('.project-nav__arrow--right').click(function () {
        $('.project-block-wrap').slick("slickNext");
    })
    $('.project-nav__arrow--left').click(function () {
        $('.project-block-wrap').slick("slickPrev");
    })
    (function () {
        var $frame  = $('#overflow');

        // Call Sly on frame
        $frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 0,
            scrollBy: 1,
            mouseDragging: 1,
            swingSpeed: 0.2,
            scrollBar: $('.hsscrollbar'),
            dragHandle: 1,
            clickBar: 1,
            elasticBounds: 1,
            speed: 600,
            startAt: 0,
        });

    }());
});

