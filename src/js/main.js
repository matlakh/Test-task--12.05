$(document).ready(function () {
    let block_show = false;

    $('.main-section__aside').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1.5,
        arrows: false,
    });

    $('.back-up').on('click', function (e) {
        $('.header').slideDown(0);
    })

    $('.main-section__scroll').on('click', function (e) {
        $('.main-section__aside').css('margin-top', '-60px');
        $('.main-section__aside').slick('slickNext');
        $('.header').slideUp(1000);
        $('.line').slideUp(1000);
        $('.head-section').fadeOut(1000);
        $('.sunflow-section').css('top', '0');
        $('.main-section__body').css('opacity', '0');

        block_show = false;
        let link = $(this).attr('href'),
            el = $(document).find(link);
        if (el.length > 0) {
            console.log(el);
            el = el.eq(0).offset().top - 20;
            console.log(el);
            $('html, body').animate({
                scrollTop: el + 'px'
            }, 500, 'linear');
        }
        return false;
    });

    function scrollTracking() {
        if (block_show) {
            return false;
        }

        var windowTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var elemTop = $('.aside__linen').offset().top;
        var elemHeight = $('.aside__linen').outerHeight();
        var docHeight = $(document).height();

        if (windowTop + windowHeight >= elemTop || windowHeight + windowTop == docHeight || elemHeight + elemTop < windowHeight) {
            block_show = true;
            console.log(1);
            $('.linen-section').css('top',);
            $('.linen-section').show('fast', function () {
                $(this).next().show('fast', arguments.callee);
            });

        }
    }

    $(window).scroll(function () {
        scrollTracking();
    });

    $(document).ready(function () {
        scrollTracking();
    });
})