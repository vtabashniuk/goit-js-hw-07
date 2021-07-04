const inputRef = document.querySelector('#controls > input');

const ButtonsRef = {
  render: document.querySelector('#controls > [data-action="render"]'),
  destroy: document.querySelector('#controls > [data-action="destroy"]'),
};

const boxesRef = document.querySelector('#boxes');

const createOneBox = (dimentions = 30, text) => {
  const boxElement = document.createElement('div');
  boxElement.style.display = 'flex';
  boxElement.textContent = text;
  boxElement.style.margin = '5px';
  boxElement.style.width = `${dimentions}px`;
  boxElement.style.height = `${dimentions}px`;
  boxElement.style.fontWeight = '700';
  boxElement.style.color = 'white';
  boxElement.style.justifyContent = 'center';
  boxElement.style.alignItems = 'center';
  boxElement.style.backgroundColor = `rgb(
      ${Math.random() * 256},
      ${Math.random() * 256},
      ${Math.random() * 256})`;
  return boxElement;
};

const createBoxes = amount => {
  boxesRef.style.display = 'flex';
  boxesRef.style.flexWrap = 'wrap';
  const arrayOfBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    arrayOfBoxes.push(createOneBox(30 + i * 10, `${i + 1}`));
  }
  return arrayOfBoxes;
};

const destroyBoxes = () => {
  boxesRef.innerHTML = '';
  inputRef.value = '';
};

ButtonsRef.render.addEventListener('click', () => {
  const amount = inputRef.valueAsNumber;
  amount > 0 && amount < 101
    ? boxesRef.append(...createBoxes(amount))
    : boxesRef.append('Количество квадратов должно быть от 1 до 100!');
});

ButtonsRef.destroy.addEventListener('click', destroyBoxes);
