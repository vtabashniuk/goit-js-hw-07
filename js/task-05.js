const inputRef = document.querySelector('#name-input');

const nameToChangeRef = document.querySelector('#name-output');

const onInputChangeNameHandler = event =>
  (nameToChangeRef.textContent = event.currentTarget.value);

inputRef.addEventListener('input', onInputChangeNameHandler);

// function onInputChangeNameHandler(event) {
//     nameToChangeRef.textContent = event.currentTarget.value;
// }
