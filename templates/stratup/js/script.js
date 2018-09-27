
        document.write('<link rel="stylesheet" href="fancybox/source/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />');
        document.write('<script type="text/javascript" src="fancybox/source/jquery.fancybox.pack.js?v=2.1.5"></scr'+'ipt>');
        $(document).ready(function() {
        	$('.fancybox').each(function () {
        	    var href = this.getAttribute('data-silex-href') || this.getAttribute('href');
        	    if (this.getAttribute('data-silex-href')) {
            	    this.removeAttribute('data-silex-href');
            	    // for the fancybox script
            	    this.setAttribute('href', href);
            	    // prevent silex from opening link
            	    $(this).off('click');
        	    }
        	    // this is a galery
        	    this.setAttribute('data-fancybox-group', 'group1');
        	});
        	// create the fancybox
        	$('.fancybox').fancybox();
        });
    