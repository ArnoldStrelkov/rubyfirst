// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

//= require_tree .

$(document).ready(function() {

hljs.initHighlightingOnLoad();

    $('#add_idea_button').on('click', function(){
        $(this).hide(200);
        console.log(this.id)
       
        $('#add_idea_form').show(200);
        
      
    });
    
    var a_joined = function () {
      
      $('.a_joined').on('click', function(e){
        e.preventDefault();
        
        $(this).parent().parent().parent().find('.sususers').show(200);
        
        
      
    });
        
    };
    
    a_joined();
    
    $(document).on('click', '.add_post_button', function(e) {

 e.preventDefault();
  var formData;
    formData = new FormData($('.idea-form')[0]);
 
 
 // alert('aaa');
  
       $.ajax({
      url:"/api/new_idea",
      type: 'POST',
      data: formData,
      async: true,
      success: function(response) {
       document.getElementById('idea-form').reset();
       $('.new').prepend(response);  
       $('#add_idea_form').hide(200);
       $('#add_idea_button').show(200);
       
 
      },
     cache: false,
      contentType: false,
      processData: false
  });
 
 

 });
 
 //
 var youtube = function() {   
    
    
 $(".youtube").each(function() {
        
        
        // определение миниатюры
        $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

        // значок Play поверх миниатюры
        // $(this).append($('<div/>', {'class': 'play'}));

        $(document).delegate('#'+this.id, 'click', function() {
            // iframe со включенной опцией autoplay
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&rel=0";
           // if ($(this).data('params')) iframe_url+='&'+$(this).data('params');

            // Высота и ширина iframe
            var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url });

            // Замена миниатюры плеером
            $(this).replaceWith(iframe);
        });
    });
    
    

 }; //конец youtube
    
    
youtube ();


}  );