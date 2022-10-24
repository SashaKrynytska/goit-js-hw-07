import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

galleryContainer.addEventListener("click", onGalleryContainerClick);
// console.log(typeof galleryContainer);

// створення розмітки галереї
galleryItems.forEach(({ original, preview, description }) => {
  galleryContainer.innerHTML += `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
</a>
</div>`;
});

// відкриття фото
function onGalleryContainerClick(evn) {
  if (evn.target.nodeName == "IMG") {
    evn.preventDefault();
    let originalImage = evn.target.dataset.source;
    openOriginalImage(originalImage);
  }
}

// створення модалки
let instance;
function openOriginalImage(original) {
  instance = basicLightbox.create(
    `
    <div class="modal">
        <img src="${original}" width="900"/>
    </div>`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  instance.show();
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    instance.close();
  }
}
