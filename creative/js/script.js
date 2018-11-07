

        $(function() {
            /* hamburger menu */
            $('.close-btn, .open-btn').click(function() {
                $('body').toggleClass('is-not-active is-active');
            });
        
            /*
                animation widget from here: https://github.com/silexlabs/Silex/issues/443
            */
        
            window.sr = ScrollReveal({
                distance: '100px'
            });
            sr.reveal('.from-left', { origin:  'left'});
            sr.reveal('.from-right', { origin:  'right'});
            sr.reveal('.from-top', { origin:  'top'});
            sr.reveal('.from-bottom', { origin:  'bottom'});
        
        })
    