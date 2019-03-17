
$(function() {
    $('.hero-scroll-down').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#after-hero").offset().top
        }, 500);
    });
})