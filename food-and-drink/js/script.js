
$(function() {
  var $container = $('<div id="smooth-container"></div>');
  var $body = $('body');
  
  $body.children().appendTo($container);
  
  $container
  .appendTo($body)
  .smoothState();
});
