
        function fullHeight() {
            var RATIO = 1; // 3/4
            if($(window).width() < 480) return;
            $('.hero').each(function() {
                // get section content (for sections only)
                var sectionContent = $(this).find('.silex-element-content');
                // if this is a section, get its content container's min-height and apply it to the section
                // so that the section has a minimum height
                var minHeight = sectionContent.length ? sectionContent.css('min-height') : '';
                $(this).css({
                    'height': $(window).height()*RATIO,
                    'min-height': minHeight
                });
            });
            $('.hero-centered').each(function() {
                var minHeight = $(this).css('min-height');
                $(this).css({
                    'top': '50%',
                    'margin-top': Math.round(-parseInt(minHeight) / 2) + 'px'
                });
            });
        }
        $(window).resize(fullHeight);
        $(window).ready(fullHeight);
    $(window).ready(function() {
        $('.scroll-down').click(function() {
            var container = $('html,body'),
            scrollTo = $('.fold');
        container.animate({
            scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
        });
        });
    });
    
    
    
    
    
/*
animation widget from here: https://github.com/silexlabs/Silex/issues/443
*/
$(function() {
    window.sr = ScrollReveal({
        distance: '100px'
    });
    sr.reveal('.from-left', { origin:  'left'});
    sr.reveal('.from-right', { origin:  'right'});
    sr.reveal('.from-top', { origin:  'top'});
    sr.reveal('.from-bottom', { origin:  'bottom'});

})
    