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

    $('#add_idea_button').on('click', function() {
        $(this).hide(200);
        $('#add_idea_form').show(200);

    });

    $('#add_post_button').on('click', function() {
        $("#idea-form").submit();
    });

    // $(document).on('click', '.add_post_button', function(e) {
    //     $("#idea-form").submit();
    //  });


    

    $('.a_joined').on('click', function(e) {
        e.preventDefault();
        $(this).parent().parent().parent().find('.sususers').show(200);

    });

   

   



    //
    

	$(".youtube").each(function() {

		// определение миниатюры
		$(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

        $(document).on('click', '#' + this.id, function() {
		
			// формируем ссылку со включенной опцией autoplay
			var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&rel=0";
			
			// Формируем элемент iframe
			var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url});

			// Замена миниатюры плеером
			$(this).replaceWith(iframe);
    		});
    	});

    


});