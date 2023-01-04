import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});

// player.on('play', function() {
//     console.log('played the video!');
// });
const onPlay = function (data) {
  
localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
}

// let saveTimeData = localStorage.getItem("videoplayer-current-time");
let dataObj = {};
if (localStorage.getItem("videoplayer-current-time")) {
      dataObj = JSON.parse(localStorage.getItem("videoplayer-current-time"));
}

function setTimeOnVideo() {
    
   
    if (dataObj.seconds === 'null' ) {
        return;
    } else {
        player.setCurrentTime(dataObj.seconds).then(function(seconds) {
    
    }).catch(function(error) {
    switch (null) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
    }

}

setTimeOnVideo();
player.on('timeupdate', throttle(onPlay, 1000));








