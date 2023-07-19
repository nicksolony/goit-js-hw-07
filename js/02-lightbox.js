import { galleryItems } from './gallery-items.js';

// Change code below this line

let galleryContainer = document.querySelector('ul.gallery');

let galleryElements = galleryItems.map(({preview, original, description}) => {
    return `<li class="gallery__item" >
               <a class="gallery__link" href=${original}>
                   <img
                       class="gallery__image"
                       src="${preview}"
                       alt="${description}"
                   >
               </a>
           </li>`
}).join(' ');

galleryContainer.innerHTML = galleryElements;

galleryContainer.addEventListener('click',e => {
    e.preventDefault();
    if(!e.target.classList.contains('gallery__image'))
    return;

    let lightbox = new SimpleLightbox (
        `.gallery a`,
        { 
            captionsData: 'alt',
            captionDelay: 250
    });
})