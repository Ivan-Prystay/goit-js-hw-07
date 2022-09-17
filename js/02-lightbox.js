import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const markupImg = galleryItems.map(
  ({
    preview,
    original,
    description,
  }) => `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" style="display:block" />
    </a></li>`
);

galleryRef.insertAdjacentHTML("beforeend", markupImg.join(""));

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  captionDelay: 250,
});
