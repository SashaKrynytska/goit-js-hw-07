import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
// const galleryMarkup = createGalleryMarkup(galleryItems);
// galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);
// console.log(typeof galleryContainer);
window.addEventListener("keydown", onEscKeyPress);

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
    // console.log(evn.target.dataset.source);
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

//закриття по Escape
function onEscKeyPress(event) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    console.log("true");
    instance.close();
  }
}
// АЛТЕРНАТИВНА РОЗМІТКА ГАЛЕРЕЇ
// function createGalleryMarkup(galleryItems) {
//   return galleryItems
//     .map(({ original, preview, description }) => {
//       return `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
//     })
//     .join("");
// }
