var throttle = require('lodash.throttle');

console.log(throttle);
//--
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
//console.log(iframe);
const player = new Vimeo.Player(iframe);
//--
const STORAGE_KEY = 'videoplayer-current-time';
//--
player.on(
  'timeupdate',
  throttle(function (data) {
    console.log(data.seconds);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
  }, 1000)
);
//--
const currentTime = localStorage.getItem(STORAGE_KEY);
console.log(currentTime);
player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
//--
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
//console.log(player.on);
//--
