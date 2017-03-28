//	This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	  
var index = 0;
var videos = ["i648EZEQbug", "BHdg_0DFHMw", "9XcpMCly1IY", "DKwbZ4LWT9Q", "TQwvnaf-_Eg", "JsQIqwh7Y8o",
			  "umCq5V36aT4", "mNJcTqHKdZE", "4_uggscguzs", "de1oJfoDU2c", "ln_L6995T4E", "sP4o9veYykg",
			  "Dbhss_w9Lsc", "z9Ke1aBnQgQ", "odAqNXLipNA", "MOSlaX19Zw8", "Tu14joqyqP4", "LKkGX0T3MdE",
			  "CSnmyJGNo6U", "W0mQBnvVARk", "FkhpxmF8s-w", "o7eSBwEBwOk", "6c16QdPzS7o", "lyLZmds4QWo",
			  "QbcdZnYVcjw", "gzN6EMspLAU", "NDbEgRPQHA0", "zF66J4FeLYo", "bBnTrU4XE8M", "OMyiqDl_v_s",
			  "DKfwuuas46I", "G7XQ4O9X6eM", "XAoWwvOOcUQ", "DscImAQkdow", "VRR6etuZTfU", "YZqC32Ed7MM",
			  "WY87o9IZXWg", "uoHY1wpnLDQ", "Nm-9dLq6Szs", "S1oMZ5sfqAo", "R9Z9Alr5NWc", "R8LUgJ9gN80",
			  "7EEH8Wj1OqY", "_s3Lfsn5MV4", "P0IrNQsfL9c", "7-g__catIIU", "4BZgpQ_KoOw", "J0cvJ8ScfQw",
			  "x6ZKufGsVV4", "BiEMkVdOBCY", "U5J23g-uH5I", "2g4dakkzsj4", "hSkES0hh_pY", "CoeQt7ZX5Vc",
			  "5qQbDGM1fV0", "s6EkPdMit6s", "Cd_31H9qAWU", "iJwhnS3eKco", "Zepq2WOWsqQ", "NWqrHcc6p5M",
			  "kDgyutf023A", "2b3Purwf4GU", "s32MKzq9e3U", "xbDok-pJLu0", "t-ZAcEbHaeQ"];
randomizeArray(videos);

var videoIndex = videos[index];
	  
function onYouTubeIframeAPIReady() {
	player = new YT.Player('player', {
		height: '94%',
		width: '100%',
		videoId: videoIndex,
		enablejsapi: 1,
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
	playPause(event.data);
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
	if (index > videos.length - 1) {
		index = 0;
	}
	return index;
}
function lastIndex() {
	index--;
	if (index < 0) {
		index = videos.length - 1;
	}
	return index;
}
function playPause(playerStatus) {
	var asema = document.getElementById("playnappula");
	if (playerStatus == 1) {
		asema.innerHTML = '<i class="material-icons">pause</i>';
		asema.onclick = function(){player.pauseVideo();};
	} else if (playerStatus == 2) {
		asema.innerHTML = '<i class="material-icons">play_arrow</i>';
		asema.onclick = function(){player.playVideo();};
	} else {
		asema.innerHTML = '<i class="material-icons">loop</i>'
		asema.onclick = function(){player.playVideo();};
	}
}
function nextVideo() {
	player.loadVideoById(videos[nextIndex()]);
}
function lastVideo() {
	player.loadVideoById(videos[lastIndex()]);
}