$(document).ready(function(){
	$(".close-startpage").click(function(){
		$("#lookbook-container").show();
		$("#desktop-startpage").hide();
		$("#play-film").hide();
	})

	$(".open-startpage").click(function(){
		$("#lookbook-container").hide();
		$("#play-film").hide();
		$("#desktop-startpage").show();
	})

	$("#playfilm-button").click(function(){
		$("#play-film").show();
		$("#desktop-startpage").hide();
	})

    setTimeout(function(){ // loader page
        $('body').addClass('loaded-now');
    }, 1000);

	$("#close-film").click(function(){
		$("#play-film").hide();
		$("#desktop-startpage").show();
	})


	/*)
	if ( $(window).width() > 600) {
		$('html, body, *').mousewheel(function(e, delta) {
	        this.scrollLeft -= (delta * 1); // ändrar takten på scroll
	        e.preventDefault();
	    });
	}*/
	
	$(".gif").hover( // png -> gif
        function()
        {
          var src = $(this).attr("src");
          $(this).attr("src", src.replace(/\.png$/i, ".gif"));
        },
        function()
        {
          var src = $(this).attr("src");
          $(this).attr("src", src.replace(/\.gif$/i, ".png"));
        });


	setTimeout(function(){ // loader page
        $('body').addClass('loaded-fade');
    }, 2000);
    setTimeout(function(){ // loader page
        $('body').addClass('loaded-now');
    }, 4000);

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

		var iframe = document.getElementById('player1');

	// $f == Froogaloop
	var player = $f(iframe);

	// bind events
	var playButton = document.getElementById("play-button");
	playButton.addEventListener("click", function() {
	  player.api("play");
	});

	var playButton = document.getElementById("playfilm-button");
	playButton.addEventListener("click", function() {
	  player.api("play");
	});

	var pauseButton = document.getElementById("pause-button");
	pauseButton.addEventListener("click", function() {
	  player.api("pause");
	});

	var pauseButton = document.getElementById("close-film");
	pauseButton.addEventListener("click", function() {
	  player.api("pause");
	});

	var restartButton = document.getElementById("restart-button");
	restartButton.addEventListener("click", function() {
	  player.api(setCurrentTime(0));
	});



	//VIMEO PLAYER END


	// object-fit polyfill run
        objectFitImages();

        /* init Jarallax */
        jarallax(document.querySelectorAll('.jarallax'));

        jarallax(document.querySelectorAll('.jarallax-keep-img'), {
            keepImg: true,
        });



})