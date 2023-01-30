export default function makeGalleryMarkup(array) {
    return array.map(({original,preview,description}) => `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/></a>`).join('');
}
