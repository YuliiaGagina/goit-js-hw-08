
const formEl = document.querySelector('.feedback-form');
import throttle from 'lodash.throttle';
const formData = {};
const fillUnputsInForm = () => {
    try {
         const savedDataFromForm = localStorage.getItem("feedback-form-state");
    const savedData = JSON.parse(savedDataFromForm);
    if (savedData === null) {
        return;
    }
    for (const elem in savedData) {
      formEl.elements[elem].value = savedData[elem];
    }
    } catch {
        console.log(error);
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
