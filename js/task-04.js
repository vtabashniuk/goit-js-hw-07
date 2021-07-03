const valueRef = document.querySelector('#value');

const decrementButtonRef = document.querySelector('[data-action="decrement"]');

const incrementButtonRef = document.querySelector('[data-action="increment"]');

function addClassToValue(number) {
  if (number > 0) {
    valueRef.classList.add('positive');
    valueRef.classList.remove('negative');
  } else {
    valueRef.classList.add('negative');
    valueRef.classList.remove('positive');
  }
}

function onClickIncreaseValueHandler() {
  let counter = Number(valueRef.textContent);
  counter += 1;
  valueRef.textContent = counter;
  addClassToValue(counter);
}

function onClickReduceValueHandler() {
  let counter = Number(valueRef.textContent);
  counter -= 1;
  valueRef.textContent = counter;
  addClassToValue(counter);
}

incrementButtonRef.addEventListener('click', onClickIncreaseValueHandler);
decrementButtonRef.addEventListener('click', onClickReduceValueHandler);
