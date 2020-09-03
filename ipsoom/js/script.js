

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":960},"pages":[{"id":"page-home","displayName":"Home","link":{"linkType":"LinkTypePage","href":"#!page-home"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-our-mission","displayName":"Our Mission","link":{"linkType":"LinkTypePage","href":"#!page-our-mission"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-news-press","displayName":"News & Press","link":{"linkType":"LinkTypePage","href":"#!page-news-press"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-how-to-help","displayName":"How to Help","link":{"linkType":"LinkTypePage","href":"#!page-how-to-help"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-contact","displayName":"Contact","link":{"linkType":"LinkTypePage","href":"#!page-contact"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false}]}
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