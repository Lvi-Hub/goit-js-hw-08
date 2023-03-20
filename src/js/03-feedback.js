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
//const storageData = {};
storageRestore();
//--
function formListen(e) {
  let storageData = localStorage.getItem(STORAGE_KEY);
  storageData = storageData ? JSON.parse(storageData) : {};
  storageData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
}
//--Submit
function handleSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}

//--Restore
function storageRestore() {
  let dataSave = JSON.parse(localStorage.getItem(STORAGE_KEY));
  //Variant_1
  console.log(dataSave.email);
  if (dataSave) {
    Object.entries(dataSave).forEach(([name, value]) => {
      ref.form.elements[name].value = value || '';
    });
  }
  // Variant_2
  // if (dataSave) {
  //   ref.form.elements.email.value = dataSave.email || '';
  //   ref.form.elements.message.value = dataSave.message || '';
  //   console.log(dataSave);
  // }
}

// Піддивився  у Репети і розібрався. Два варіанти робочі.
// Перший кращий, перебирати можна великі об'єкти автоматично
//
