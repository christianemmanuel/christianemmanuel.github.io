/*****************************
Homepage banner
******************************/	
$(function() {
	// Adjust Height
    adjustHeight();

	//Adjust Height
	function adjustHeight() {
	    $winHeight = $(window).height();
	    if($winHeight>520){
	        $('.auto-height').css('min-height',$winHeight);
	    }
	    else{
	        $('.auto-height').css('min-height','420px');
	    }
	}
	// Window Resize
    $(window).resize(function(){
        adjustHeight();
    });
});

/*****************************
Scroll down page
******************************/	
$(function() {
	$('.scroll_down').click(function() {
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'data-href') ).offset().top - 100
	    }, 700);
	    return false;
	});
});

/*****************************
Toggle Nav
******************************/	
$(function() {
	$('.hamburger_menu').click(function() {
	    $('body').toggleClass('toggle_nav');
	    
	    return false;
	});
	$('.sidebar-menu-overlay').click(function() {
	    $('body').removeClass('toggle_nav');
	});
});

/*****************************
Sticky Header
******************************/
$(window).scroll(function(){
	var winTop = $(window).scrollTop();
	if(winTop >= 1){
		$(".main-header").addClass("sitcky-header");
	} else {
		$(".main-header").removeClass("sitcky-header");
	}
});


/*****************************
Dropdown Subpage Menu
******************************/	
$(function() {
	$('.btn_dropdown_trigger').click(function(){
	    var myelement = $(this).attr('href')
	        $(myelement).toggleClass('fast_show');
	    $('.body-dropdown:visible').not(myelement).removeClass('fast_show');
	    $(this).parent('.toggle_dropdown').toggleClass('active_nav');
	    return false;
	});

	$('.btn_dropdown_trigger').click(function(event){
	    event.stopPropagation();
	});

	$(document).click(function() {
	  $('.body-dropdown').removeClass('fast_show');
	  $('.btn_dropdown_trigger').parent('.toggle_dropdown').removeClass('active_nav');
	});
});


/*****************************
Play and Pause Video
******************************/	
$(function() {
    $('.playpause').click(function () {
        if($(this).parents(".main-video-body").find(".video-1").get(0).paused){
            $(this).parents(".main-video-body").find(".video-1").get(0).play();
            $(this).parents(".main-video-body").find(".mobile_details").fadeOut();
            $('.showreel_bg video').css("opacity", "1");
            $('.main-video-body').css("background", "transparent");
        } else {
            $(this).parents(".main-video-body").find(".video-1").get(0).pause();
            $(this).parents(".main-video-body").find(".mobile_details").fadeIn();
        }
    });

    $('.video-1').click(function() {
	  if (this.paused == false) {
	      this.pause();
	      $(".mobile_details").fadeIn();
	  }
	});

    $('.video-1').on('ended',function() {
        $(this).parents(".main-video-body").find(".mobile_details").fadeIn();
        $('.main-video-body').addClass("video-banner");
        $('.showreel_bg video').css("opacity", "0");
    });
});

/*****************************
Media Query
******************************/	
var windowWidth = $(window).width();

if(windowWidth<=1024) {
    $(function() {
		$('.scroll_down').click(function() {
		    $('html, body').animate({
		        scrollTop: $( $.attr(this, 'data-href') ).offset().top - 85
		    }, 700);
		    return false;
		});
	});
}
