

        $(function () {
            $('.go-down').click(function () {
                $('html,body').animate({scrollTop: $('#after-hero').offset().top}, 500);
            });
        });
    