// Add imports above this line
import lightbox from "./lightbox-sets";
import makeGalleryMarkup from "./makeGalleryMarkup";
import { galleryItems } from './gallery-items';
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
};
refs.gallery.innerHTML = makeGalleryMarkup(galleryItems);
lightbox();
