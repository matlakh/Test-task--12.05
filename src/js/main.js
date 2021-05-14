$(function () {
    let block_show = null;

    function scrollTracking() {
        let scrollButton = $('.main-section__scroll');
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