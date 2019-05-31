$(() => {
    $(window).scroll(() => {
        if ($('.navbar').offset().top > 90) {
            $('.fixed-top').addClass('nav-scrolled');
        } else {
            $('.fixed-top').removeClass('nav-scrolled');
        }
    });
});