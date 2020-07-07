

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":960},"pages":[{"id":"home","displayName":"Home","link":{"type":"LinkTypePage","value":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true},{"id":"our-mission","displayName":"Our Mission","link":{"type":"LinkTypePage","value":"#!page-our-mission"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true},{"id":"news-press","displayName":"News &amp; Press","link":{"type":"LinkTypePage","value":"#!page-news-press"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true},{"id":"how-to-help","displayName":"How to Help","link":{"type":"LinkTypePage","value":"#!page-how-to-help"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true},{"id":"contact","displayName":"Contact","link":{"type":"LinkTypePage","value":"#!page-contact"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true}]}
/* slider buttons */
$(function() {
    try {
        var slider = $('.slider .unslider').children().get(0);
        var unslider = $(slider).data('unslider');
        $('.sub-nav').click(function() {
            unslider.next()
            $('.sub-nav-active').removeClass('sub-nav-active');
            $(this).addClass('sub-nav-active');
        });
    }
    catch(e) {
    }
})