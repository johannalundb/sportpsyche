var closeVideo = function () {
        $("#play-film").hide();
        $("#desktop-startpage").show();
};

var hoverEl = null;

$(document).ready(function(){
	$(".close-startpage").click(function(){
		$("#lookbook-container").show();
		// $("#desktop-startpage").hide();
		$("#play-film").hide();
	})

	$(".open-startpage").click(function(){
		$("#lookbook-container").hide();
		$("#play-film").hide();
		$("#desktop-startpage").show();
	})

	$("#playfilm-button").click(function(){
		$("#play-film").show();
		// $("#desktop-startpage").hide();
	})

	// if ( $(window).width() > 600) {
	// 	$('html, body, *').mousewheel(function(e, delta) {
	//         this.scrollLeft -= (delta * 1); // ändrar takten på scroll
	//         e.preventDefault();
	//     });
	// }

	//mobil
	$(window).scroll(function() { //förminskar logon när man scrollar
	    if ($('body').height() <= jQuery(window).scrollTop()/0.4) { 
	        $('#mobile-logo').addClass("sticky");
	    }
	    else{
	        $('#mobile-logo').removeClass("sticky");
	    }
	});

	$(window).scroll(function() { //döljer filmen när man scrollar längst ner
		if ($('body').height() <= jQuery(window).scrollTop()/0.5) {
			$('#video-cover').fadeIn(300);
		}
		else{
			$("#video-cover").fadeOut(300);
		}
	});

	$(window).scroll(function() { //döljer side-rollers när man scrollar 
		if ($('body').height() <= jQuery(window).scrollTop()/0.1) {
			$('.fade-on-scroll').fadeOut(100);
		}
		else{
			$(".fade-on-scroll").fadeIn(100);
		}
	});

    // setTimeout(function(){ // loader page
    //     $('body').addClass('loaded-now');
    // }, 3000);

    setTimeout(function(){ // loader page
        // $('body').addClass('loaded-fade');
        $(".loader").fadeOut(2000);
    }, 1000);

    setTimeout(function(){ // loader page
        // $('body').addClass('loaded-now');
        $(".loader").hide();
    }, 3000);

	$("#close-film").click(closeVideo);
	
	
	
	// if ( $(window).width() > 600) {
	// 	$(".gif").hover( // jpg -> gif
	//         function()
	//         {
	//         	self = this;
	//           hoverEl = setTimeout(function(){
	//           	var src = $(self).attr("src");
	//           	$(self).attr("src", src.replace(/\.jpg$/i, ".gif"));
	//           }, 700);
	//         },
	//         function()
	//         {
	//           clearTimeout(hoverEl);
	//           var src = $(this).attr("src");
	//           $(this).attr("src", src.replace(/\.gif$/i, ".jpg"));
	//         });
	// }

	if ( $(window).width() > 600) {
		$("video.gif").hover( // jpg -> gif
	        function()
	        {
	        
	          	$(this).get(0).play();
	          	// $(self).attr("src", src.replace(/\.jpg$/i, ".gif"));
	        },
	        function()
	        {
	          // clearTimeout(hoverEl);
	          // var src = $(this).attr("src");
	          $(this).get(0).pause();
	          // $(this).get(0).currentTime = 0;
	          // $(this).attr("src", src.replace(/\.gif$/i, ".jpg"));
	        });
	}

	

    //fullscreen start
	    function toggleFullscreen(elem) {
	  elem = elem || document.documentElement;
	  if (!document.fullscreenElement && !document.mozFullScreenElement &&
	    !document.webkitFullscreenElement && !document.msFullscreenElement) {
	    if (elem.requestFullscreen) {
	      elem.requestFullscreen();
	    } else if (elem.msRequestFullscreen) {
	      elem.msRequestFullscreen();
	    } else if (elem.mozRequestFullScreen) {
	      elem.mozRequestFullScreen();
	    } else if (elem.webkitRequestFullscreen) {
	      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
	    }
	  } else {
	    if (document.exitFullscreen) {
	      document.exitFullscreen();
	    } else if (document.msExitFullscreen) {
	      document.msExitFullscreen();
	    } else if (document.mozCancelFullScreen) {
	      document.mozCancelFullScreen();
	    } else if (document.webkitExitFullscreen) {
	      document.webkitExitFullscreen();
	    }
	  }
	}

	document.getElementById('playfilm-button').addEventListener('click', function() {
	  toggleFullscreen();
	});

	document.getElementById('close-film').addEventListener('click', function() {
	  toggleFullscreen();
	});

	// fullscreen slut

	//VIMEO PLAYER START
        var iframe = $('#player1');
        var options = {};
	var player = new Vimeo.Player("player1", options);

        console.log(player);

        player.on("bufferend", function () {
                console.log("bufferend lets goooo!");
        });

	// Bind player events.
        $(".video-play").click(function () {
                player.play();
        });

        $(".video-pause").click(function () {
                player.pause();
        });

        $(".video-restart").click(function () {
                player.setCurrentTime(0);
        });

        // Pause video when leaving fullscreen.
        var isFullscreen = false;
        $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function (ev) {
                isFullscreen = !isFullscreen;
                if (!isFullscreen) {
                        closeVideo();
                        player.pause();
                        player.setCurrentTime(0);
                }
        });

	// object-fit polyfill run
        objectFitImages();
        /* init Jarallax */
        jarallax(document.querySelectorAll('.jarallax'));

        jarallax(document.querySelectorAll('.jarallax-keep-img'), {
            keepImg: true,
        });

})
