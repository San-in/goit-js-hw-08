import Player from '@vimeo/player';
import {CURRENT_TIME, addCurrentTimetoLocalStorage} from './addCurrentTimetoLocalStorage';
import catchedErrors from './catchedErrors';

const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(addCurrentTimetoLocalStorage , 1000));
player.setCurrentTime(localStorage.getItem(CURRENT_TIME)).catch(catchedErrors);



