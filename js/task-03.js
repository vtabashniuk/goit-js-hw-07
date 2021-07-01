const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const liElementCreation = ({ url, alt }) => {
//   const liElement = document.createElement('li');
//   liElement.classList.add('item');

//   const imgElement = document.createElement('img');
//   imgElement.classList.add('item__image');
//   imgElement.src = url;
//   imgElement.alt = alt;

//   liElement.append(imgElement);
//   return liElement;
// };

// const liItemsCreation = data => data.map(liElementCreation);
// const galleryRef = document.querySelector('#gallery');
// galleryRef.append(...liItemsCreation(images));

/*
 ********************/
const galleryRef = document.querySelector('#gallery');
const liElementCreation = ({ url, alt }) => {
  return `
  <li class="item">
      <img class="item__image" src="${url}" alt="${alt}">
  </li>`;
};

const liElementsCreating = data => data.map(liElementCreation).join('');

galleryRef.insertAdjacentHTML('afterbegin', liElementsCreating(images));
/***************************
 */
