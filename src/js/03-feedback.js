//--Import
var throttle = require('lodash.throttle');
//--ref
const ref = {
  form: document.querySelector('.feedback-form'),
};

ref.form.addEventListener('submit', handleSubmit);
ref.form.addEventListener('input', throttle(formListen, 500));

//--Storage

const STORAGE_KEY = 'feedback-form-state';
const storageData = {};
storageRestore();
//--
function formListen(e) {
  storageData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
}
//--
function handleSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

//--Restore

function storageRestore() {
  const dataSave = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(dataSave.email);
  if (dataSave) {
    ref.form.elements.email.value = dataSave.email;
    ref.form.elements.message.value = dataSave.message;
  }
}
