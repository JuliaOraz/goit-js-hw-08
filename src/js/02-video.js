import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VIDEOTIME_KEY = "videoplayer-current-time";

// Сохраняем время в локальное хранилище
player.on('timeupdate', throttle(setVideoPlayerTime,1000));

function setVideoPlayerTime (currentTime) {
    localStorage.setItem(VIDEOTIME_KEY, JSON.stringify(currentTime));
}

// Возобновляем воспроизведение с сохраненной позиции
const getTime = localStorage.getItem(VIDEOTIME_KEY);

if (getTime) { 
    try {
        const timeVideo = JSON.parse(getTime).seconds;       
        player.setCurrentTime(timeVideo);
        } catch (error) {
            console.log("Ошибка"); 
        }
}
