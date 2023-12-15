jQuery(document).ready(function ($) {
    var my_nav = $('.navbar-sticky');
    // Create a placeholder for the sticky navigation to prevent content jump
    var nav_placeholder = $('<div>').css({height: my_nav.outerHeight(), display: 'none'}).insertBefore(my_nav);

    // grab the initial top offset of the navigation 
    var sticky_navigation_offset_top = my_nav.offset().top;

    // our function that decides whether the navigation bar should have "fixed" css position or not.
    var sticky_navigation = function () {
        var scroll_top = $(window).scrollTop(); // our current vertical position from the top

        // if we've scrolled more than the navigation, change its position to fixed to stick to top
        if (scroll_top > sticky_navigation_offset_top) {
            my_nav.addClass('stick');
            nav_placeholder.show(); // show placeholder to maintain layout
        } else {
            my_nav.removeClass('stick');
            nav_placeholder.hide(); // hide placeholder
        }
    };

    // parallax effect: makes the background move a bit when scrolling, otherwise fixed
    var initio_parallax_animation = function () {
        $('.parallax').each(function (i, obj) {
            var speed = $(this).data('parallax-speed');
            if (speed) {
                var background_pos = '-' + (window.pageYOffset / speed) + "px";
                $(this).css('background-position', 'center ' + background_pos);
            }
        });
    }

    // run our function on load
    sticky_navigation();

    // and run it again every time you scroll
    $(window).scroll(function () {
        sticky_navigation();
        initio_parallax_animation();
    });
});

