import { galleryItems } from './gallery-items.js';
// Change code below this line

let galleryContainer = document.querySelector('ul.gallery');

console.log(galleryContainer);

let galleryElements = galleryItems.map(({preview, original, description}) => {
     return `<li class="gallery__item" data-source = ${original}>
                <img
                    src="${preview}" alt="${description}" class="gallery__image"
                >
            </li>`
}).join(' ');

galleryContainer.innerHTML = galleryElements;