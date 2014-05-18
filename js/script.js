// **
// Markdown widget for Silex
// markdown script from https://github.com/chjj/marked/
document.write('<scr'+'ipt src="marked.min.js"></scr'+'ipt>');
// markdown theme from http://bootswatch.com/
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
// **
// google analytics
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
try {
  var pageTracker = _gat._getTracker("UA-19608894-20");
pageTracker._trackPageview();
} catch(err) {}
// **
