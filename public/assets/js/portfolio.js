$(document).ready(function(){

  let clipboard = new ClipboardJS('.copyBtn', {
    target: function(trigger) {
        return trigger.nextElementSibling;
    }

});

$(document).ready(function(){
  $('.tooltipped').tooltip();
});


clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

});

$(document).ready(function(){
    $('.materialboxed').materialbox();
  });


  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $(document).ready(function(){
    $('.carousel').carousel();
  });


  $(document).ready(function(){
    $('.collapsible').collapsible();
  });


 