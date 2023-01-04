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
if (localStorage.getItem('videoplayer-current-time')) {
  dataObj = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  console.log(formData);
}
let saveTimeData = localStorage.getItem("videoplayer-current-time");
let dataObj = JSON.parse(saveTimeData);
let time = dataObj.seconds;

function setTimeOnVideo() {
    try {
        time
        if (time === null || time === 0 ) {
    return;
} 
    player.setCurrentTime(time).then(function(seconds) {
    
    });
    } catch(err) {
        console.log(err);
    }
   

    }



setTimeOnVideo();
player.on('timeupdate', throttle(onPlay, 1000));








