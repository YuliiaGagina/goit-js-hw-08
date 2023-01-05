import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});
const dataObj = JSON.parse(localStorage.getItem("videoplayer-current-time")) || { "seconds": 0};
    
player.setCurrentTime(dataObj.seconds);

const onPlay = function (data) {
  localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
}

   
    


player.on('timeupdate', throttle(onPlay, 1000));








