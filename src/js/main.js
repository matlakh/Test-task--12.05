$(function () {
    let block_show = null;

    const burger = document.querySelector('.hamburger-menu');
    const menuLinks = document.querySelectorAll('.menu__item a');
    const mobileMenu = document.querySelector('.menu__box');

    burger.addEventListener('click', (e) => {
        e.preventDefault();

        let pagePos = window.scrollY;
        document.body.classList.add('is-menu-open');
        document.setAttribute('data-scroll', pagePos);

        mobileMenu.style.display = 'block';
    });

    menuLinks.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            let pos = parseInt(document.body.getAttribute('data-scroll'));

            mobileMenu.style.display = 'none';

            document.body.classList.remove('is-menu-open');
            document.setAttribute('data-scroll', '');

            window.scrollTo(0, pos);
        });
    });

    function scrollTracking() {



        $('.main-section__scroll').on('click', function (e) {

            let link = $(this).attr('href'),
                el = $(document).find(link);
            if (el.length > 0) {
                el = el.eq(0).offset().top;
                $('html, body').animate({
                    scrollTop: el + 'px'
                }, 500, 'linear');
            }
            return false;
        });
        var windowTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        //  var   = $('.aside__sunflow').offset().top;
        var eh = $('.aside__sunflow').outerHeight();

        if (et >= wt && et + eh <= windowHeight + windowTop) {
            if (block_show == null || block_show == false) {
                $('#console').html('Блок active полностью виден');
            }
            block_show = true;
        } else {
            if (block_show == null || block_show == true) {
                $('#console').html('');
            }
            block_show = false;
        }
    }

    $(window).scroll(function () {
        scrollTracking();
    });

    $(document).ready(function () {
        scrollTracking();
    });

})