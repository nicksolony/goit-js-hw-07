import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

let galleryContainer = document.querySelector('ul.gallery');

console.log(galleryContainer);

let galleryElements = galleryItems.map(({preview, original, description}) => {
     return `<img 
                src="${preview}" alt="${description}" width="320px class"
            >`
}).join(' ');

galleryContainer.innerHTML = galleryElements;
