//	This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	  
      var player;
	  var videos = ["i648EZEQbug", "BHdg_0DFHMw", "9XcpMCly1IY", "DKwbZ4LWT9Q", "TQwvnaf-_Eg",
	  "umCq5V36aT4", "mNJcTqHKdZE", "4_uggscguzs", "de1oJfoDU2c", "C_ysRL4JgQE", "sP4o9veYykg",
	  "Dbhss_w9Lsc", "z9Ke1aBnQgQ", "odAqNXLipNA", "MOSlaX19Zw8", "Tu14joqyqP4", "LKkGX0T3MdE",
	  "CSnmyJGNo6U"];
	  var randomVideoUrl = videos[Math.floor(Math.random() * videos.length)];
	  
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '100%',
          width: '100%',
          videoId: randomVideoUrl,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
      function onPlayerReady(event) {
        event.target.playVideo();
      }
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
          location.reload(true);
        }
	  }
