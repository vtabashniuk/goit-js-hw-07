const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const liElement = data => {
  const liItem = document.createElement('li');
  liItem.textContent = data;
  return liItem;
};

const liElementsCreating = data => data.map(liElement);

const ingredientsRef = document.querySelector('#ingredients');

ingredientsRef.append(...liElementsCreating(ingredients));
