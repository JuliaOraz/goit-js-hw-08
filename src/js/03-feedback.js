import throttle from 'lodash.throttle';

const formFeedback = document.querySelector('.feedback-form')
const emailFeedback = formFeedback.querySelector('[name="email"]')
const messageFeedback = formFeedback.querySelector('[name="message"]')

const STORAGE_KEY = "feedback-form-state";
let valueStorageFeedback = {};

formFeedback.addEventListener('submit', onSubmitFeedback)
formFeedback.addEventListener('input', throttle(onInputFeedback, 500))

getDataForm()
// Удаляет данные из локального хранилища и полей при отправке формы
function onSubmitFeedback(e) {
    e.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    console.log(valueStorageFeedback)
    e.currentTarget.reset()
    valueStorageFeedback = {};
}
 

// Сохраняет значения полей в локальное хранилище
function onInputFeedback(e) {
    valueStorageFeedback[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(valueStorageFeedback));
}

// Берет значения полей из локального хранилища
function getDataForm() { 
    const getValueFeedback = localStorage.getItem(STORAGE_KEY);
    if (getValueFeedback) { 
        try {
            const getParseValue = JSON.parse(getValueFeedback);   
            
            valueStorageFeedback = getParseValue;
            
            emailFeedback.value  = getParseValue.email ? getParseValue.email : '';
            messageFeedback.value = getParseValue.message ?  getParseValue.message : '';
        } catch (error) {
            console.log("Ошибка"); 
        }
    }
    
}
