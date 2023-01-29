import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export default function lightbox() { 
    return new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250, 
    });
}
