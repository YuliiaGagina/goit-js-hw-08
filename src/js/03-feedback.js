
const formEl = document.querySelector('.feedback-form');
import throttle from 'lodash.throttle';
let formData = {};
if (localStorage.getItem('feedback-form-state')) {
  formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(formData);
}

const fillUnputsInForm = () => {
    try {
        formData
        
    if (formData === null) {
        return;
    }
    for (const elem in formData) {
      formEl.elements[elem].value = formData[elem];
    }
    } catch(err) {
        console.log(err);
    }
   
}
fillUnputsInForm();

const saveDataInfo = (e) => {
    formData[e.target.name] = e.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    
}

formEl.addEventListener('input', throttle(saveDataInfo, 500));

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    formEl.reset();
    localStorage.removeItem("feedback-form-state");
   
});
console.log(formData);
