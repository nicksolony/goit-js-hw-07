import { galleryItems } from './gallery-items.js';
// Change code below this line

let galleryContainer = document.querySelector('ul.gallery');

let galleryElements = galleryItems.map(({preview, original, description}) => {
     return `<li class="gallery__item" >
                <a class="gallery__link" href=${original}>
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source = "${original}"
                        alt="${description}"
                    >
                </a>
            </li>`
}).join(' ');

galleryContainer.innerHTML = galleryElements;


galleryContainer.addEventListener('click',e => {
    e.preventDefault();
    console.log(e.target);
})