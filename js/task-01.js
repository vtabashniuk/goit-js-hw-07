const categoriesRef = document.querySelector('#categories');
const itemRef = categoriesRef.querySelectorAll('.item');
console.log(`В списке ${itemRef.length} категории.`);

itemRef.forEach(element => {
  console.log(`\nКатегория: ${element.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${element.querySelectorAll('li').length}`);
});
