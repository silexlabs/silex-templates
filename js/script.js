
        /*
        // **
        // Markdown widget for Silex
        // markdown script from https://github.com/chjj/marked/
        document.write('<scr'+'ipt src="marked.min.js"></scr'+'ipt>');
        // markdown theme from //bootswatch.com/
        //document.write('<link rel="stylesheet" type="text/css" href="bootstrap.min.css">');
        // convert all
        $(function(){
            $('.markdown .silex-element-content')
            .each(function(idx, el){
                var markdown = $(el).html().replace(/<\/*.*?>/gi, '\n\n');
                var html = marked(markdown);
                $(el).html(html);
            });
        });
        */
        // **
        // google analytics
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        
        ga('create', 'UA-19608894-20', 'silexlabs.github.io');
        ga('send', 'pageview');
        // **
    