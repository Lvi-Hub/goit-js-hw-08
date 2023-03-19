// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

//--
const galleryContainer = document.querySelector('.gallery'); // Знаходимо об'єкт
//--git
const imageCard = createImageCard(galleryItems); // Функція для створенню карток з фото
galleryContainer.insertAdjacentHTML('beforeend', imageCard);
function createImageCard(gallery) {
  galleryContainer.style.listStyle = 'none';
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <li>
        <a  class="gallery__item" href="${original}">
            <img style="display: block;"
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
    </li>`;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
