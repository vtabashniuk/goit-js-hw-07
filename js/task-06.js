const inputViewRef = document.querySelector('#validation-input');
const inputLength = inputViewRef.getAttribute('data-length');
console.log(typeof inputLength)


const onInputSymbolsCounterHandler = event => {
  const inputValue = event.currentTarget.value;
  if (inputValue.length == inputLength) {
    inputViewRef.classList.remove('invalid');
    inputViewRef.classList.add('valid');
  } else {
    inputViewRef.classList.remove('valid');
    inputViewRef.classList.add('invalid');
  }
};

inputViewRef.addEventListener('change', onInputSymbolsCounterHandler);
