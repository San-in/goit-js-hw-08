const CURRENT_TIME = "videoplayer_current_time";
const addCurrentTimetoLocalStorage = (data) => localStorage.setItem(CURRENT_TIME, data.seconds);

export { CURRENT_TIME,addCurrentTimetoLocalStorage };

