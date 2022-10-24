import { galleryItems } from "./gallery-items.js";
const galleryContainer = document.querySelector(".gallery");

galleryItems.forEach(({ original, preview, description }) => {
  galleryContainer.innerHTML += `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" width="800" />
</a>`;
});

let lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
