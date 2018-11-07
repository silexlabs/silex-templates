

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
    