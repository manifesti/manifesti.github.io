//	This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	  
	  var index = 0;
      var player;
	  var videos = ["i648EZEQbug", "BHdg_0DFHMw", "9XcpMCly1IY", "DKwbZ4LWT9Q", "TQwvnaf-_Eg",
	  "umCq5V36aT4", "mNJcTqHKdZE", "4_uggscguzs", "de1oJfoDU2c", "C_ysRL4JgQE", "sP4o9veYykg",
	  "Dbhss_w9Lsc", "z9Ke1aBnQgQ", "odAqNXLipNA", "MOSlaX19Zw8", "Tu14joqyqP4", "LKkGX0T3MdE",
	  "CSnmyJGNo6U", "W0mQBnvVARk", "FkhpxmF8s-w", "o7eSBwEBwOk", "6c16QdPzS7o","lyLZmds4QWo", 
	  "dg69fRRyynE", "gzN6EMspLAU", "NDbEgRPQHA0", "zF66J4FeLYo", "bBnTrU4XE8M", "OMyiqDl_v_s",
	  "DKfwuuas46I", "G7XQ4O9X6eM", "XAoWwvOOcUQ", "DscImAQkdow", "VRR6etuZTfU", "XAoWwvOOcUQ",
	  "WY87o9IZXWg", "uoHY1wpnLDQ", "Nm-9dLq6Szs", "S1oMZ5sfqAo", "R9Z9Alr5NWc", "R8LUgJ9gN80",
	  "7EEH8Wj1OqY", "_s3Lfsn5MV4", "P0IrNQsfL9c", "5w63kym-45E", "4BZgpQ_KoOw", "J0cvJ8ScfQw",
	  "x6ZKufGsVV4", "BiEMkVdOBCY", "U5J23g-uH5I", "2g4dakkzsj4", "hSkES0hh_pY", "CoeQt7ZX5Vc"];
	  randomizeArray(videos);
	  var randomVideoUrl = videos[Math.floor(Math.random() * videos.length)];
	  
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '97%',
          width: '100%',
          videoId: randomVideoUrl,
		  enablejsapi: 0,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
          }
        });
      }
      function onPlayerReady(event) {
        event.target.playVideo();
      }
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
          nextVideo();
        }
	  }
	  function newVideoUrl() {
        return videos[Math.floor(Math.random() * videos.length)];
      }
	  function randomizeArray(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
    return array;
	  }
	function nextIndex() {
		index++;
		if (index > videos.length) {
			index = 0;
		}
		return index;
	}
	function lastIndex() {
		index--;
		if (index < 0) {
			index = videos.length;
		}
		return index;
	}
	function nextVideo() {
		  player.loadVideoById(videos[nextIndex()]);
	  }
	function lastVideo() {
		  player.loadVideoById(videos[lastIndex()]);
	  }