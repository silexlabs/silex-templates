

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1000},"pages":[{"id":"page-page-1","displayName":"Page 1","link":{"linkType":"LinkTypePage","href":"#!page-page-1"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false}]}

/*
 * animation widget from here: https://github.com/silexlabs/Silex/issues/443
 */
$(function() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if(!isMobile) {
        window.sr = ScrollReveal({
            distance: '100px'
        });
        sr.reveal('.from-left', { origin:  'left'});
        sr.reveal('.from-right', { origin:  'right'});
        sr.reveal('.from-top', { origin:  'top'});
        sr.reveal('.from-bottom', { origin:  'bottom'});
    }
})
    