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
    if(!e.target.classList.contains('gallery__image'))
    return;
    
    
    let lightbox=basicLightbox.create(`
        <img
            src="${e.target.dataset.source}"
            alt="${e.target.description}"
            width="800" 
            height="600"
        >
    `, 
        {onClose: () =>{
            document.removeEventListener('keydown',onEscPress)
        },
        onShow: (lightbox) =>{
            document.addEventListener('keydown', onEscPress);
        }
    })
    lightbox.show();

    function onEscPress(e) {
        if(e.key==='Escape') {
            lightbox.close();
        }
    }
})




