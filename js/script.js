
        $(function() {
            $.get('https://api.github.com/repos/silexlabs/silex-templates/contents/templates', function(data) {
                var html = '<ul>';
                $.each(data, function(idx, template) {
                    var name = template.name.replace('-', ' ', 'g');
                    html += '<li>';
                    html += '<h2 id="'+name+'">'+name+'</h2><p><a href="templates/'+template.name+'/index.html">View this template online</a></p><p><a href="templates/'+template.name+'/index.html"><img src'+'="templates/'+template.name+'/screenshot-678x336.png" alt="'+name+' template for Silex website builder" title="'+name+' silex template"></a></p>';
                    html += '</li>';
                });
                html += '</ul>';
                $("#templates-list").html(html);
            });
        });
    