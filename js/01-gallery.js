import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const markupImg = galleryItems.map(
  ({ preview, original, description }) => `<div class="gallery__item">

<a class="gallery__link" href="large-image.jpg">
<img class="gallery__image"
src="${preview}"
data-source="${original}"
alt="${description}" 
/>
</a>

</div>`
);

galleryRef.insertAdjacentHTML("beforeend", markupImg.join(""));

galleryRef.addEventListener("click", openModalWindow);

function openModalWindow(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  //  console.log("CLICK");
  createOriginalImg();
}

function createOriginalImg() {
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  galleryRef.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
