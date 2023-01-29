const throttle = require('lodash.throttle');
import {refs,handlerOnInput, handlerOnBtn} from './03-functions';

refs.form.addEventListener('input', throttle(handlerOnInput, 500));
refs.form.addEventListener('submit', handlerOnBtn);

