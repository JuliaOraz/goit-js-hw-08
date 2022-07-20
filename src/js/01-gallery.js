// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryEl = document.querySelector('.gallery')

// Создание и рендер разметки по массиву данных
function createGalleryItem(galleryItems) { 
    return galleryItems.map(({ preview: src, original: source, description: alt }) => {
        return `<li><a class="gallery__item" href="${source}">
            <img class="gallery__image" src="${src}" alt="${alt}" />
            </a></li>`
       
    }).join('');
}

galleryEl.insertAdjacentHTML('beforeend', createGalleryItem(galleryItems));

// Модальное окно
const modalGallery = new SimpleLightbox('.gallery__item', {captionSelector: 'img', captionsData: "alt", captionPosition: 'bottom', captionDelay: 250 });