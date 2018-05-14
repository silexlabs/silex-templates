

$(function(){
    var leftOffset = parseInt($(".fixed").css('left')); 
    $(window).scroll(function(){
        $('.fixed').css({
            'left': - $(this).scrollLeft() + leftOffset
        });
    });
});