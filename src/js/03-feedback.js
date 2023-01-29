
const refs = {
    form: document.querySelector('.feedback-form'),
    email:document.querySelector('[name="email"]'),
    message:document.querySelector('[name="message"]')
};
const throttle = require('lodash.throttle');

let savedData = {};

const STORAGE_STATE = "feedback-form-state";

function isStorageEmpty() {
    return (localStorage.getItem(STORAGE_STATE) === null || Object.keys(JSON.parse(localStorage.getItem(STORAGE_STATE))).length === 0);
}




const handlerOnInput = (event) => {

        switch(event.target.nodeName) {
            case 'INPUT':
                savedData.email = event.target.value;
                break;
            case 'TEXTAREA':
                savedData.message = event.target.value;
                break;
            }

            localStorage.setItem(STORAGE_STATE, JSON.stringify(savedData));

    
};

refs.form.addEventListener('input', throttle(handlerOnInput, 500));



if (!isStorageEmpty()) {
    savedData = JSON.parse(localStorage.getItem(STORAGE_STATE));
            refs.email.value = savedData.email;
            refs.message.value = savedData.message;

}

const handlerOnBtn = (event) => {
    event.preventDefault();
    console.log(savedData);
    refs.form.reset();
    localStorage.removeItem(STORAGE_STATE);
};

refs.form.addEventListener('submit', handlerOnBtn);
