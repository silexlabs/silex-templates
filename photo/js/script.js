

/*
 * active menu widget for Silex
 * create an element which links to an anchor, e.g. an element with a link to #anchor1
 * add the css class "anchor-link" to this element
 * create an element which is the anchor, e.g. an element with the css class "anchor1"
 * when the user clicks on the link, the scroll slides until the element is visible
 * when the user slides and the element is visible, the link gets a css class "active-menu"
 */
$(function() {
    var container = $('.anchor-container');
    var containerTop = 0;
    $(window).scroll(checkScroll);
    checkScroll();
    function checkScroll(){
        // Get container scroll position
        var fromTop = $(this).scrollTop();
        if(containerTop < fromTop) {
           container.addClass('offscreen');
        }
        else {
           container.removeClass('offscreen');
}
    }
});
