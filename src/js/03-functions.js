const STORAGE_STATE = "feedback-form-state";
const refs = {
    form: document.querySelector('.feedback-form'),
    email:document.querySelector('[name="email"]'),
    message:document.querySelector('[name="message"]')
};
let savedData = {
    email: '',
    message: ''
};

function isStorageEmpty() {
    return localStorage.getItem(STORAGE_STATE) === null;
}

const handlerOnInput = ({target}) => {

    switch(target.nodeName) {
        case 'INPUT':
            savedData.email = target.value;
            break;
        case 'TEXTAREA':
            savedData.message = target.value;
            break;
        }
        localStorage.setItem(STORAGE_STATE, JSON.stringify(savedData));
};

if (!isStorageEmpty()) {
    try {
        savedData = JSON.parse(localStorage.getItem(STORAGE_STATE));
            refs.email.value = savedData.email;
            refs.message.value = savedData.message;
    } catch(error) {
        console.log(error.message);
    }
} 

const handlerOnBtn = (event) => {
    event.preventDefault();
    console.log(savedData);
    refs.form.reset();
    localStorage.removeItem(STORAGE_STATE);
};

export {refs,handlerOnInput, handlerOnBtn};
