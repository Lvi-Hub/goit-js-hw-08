// // Описаний в документації
// import SimpleLightbox from 'simplelightbox';
// // Додатковий імпорт стилів
// import 'simplelightbox/dist/simple-lightbox.min.css';
// // Add imports above this line
// import { galleryItems } from './gallery-items';
// // Change code below this line
var throttle = require('lodash.throttle');

console.log(throttle);
//--
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
//console.log(iframe);
const player = new Vimeo.Player(iframe);
//--
player.on(
  'timeupdate',
  throttle(function (data) {
    console.log(data.seconds);
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(data.seconds)
    );
  }, 1000)
);
//--
const currentTime = localStorage.getItem('videoplayer-current-time');
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
