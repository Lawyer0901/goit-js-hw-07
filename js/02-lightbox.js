import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryMain = document.querySelector(".gallery");
const imagesCreated = createGalleryItems(galleryItems);
galleryMain.insertAdjacentHTML("beforeend", imagesCreated);
galleryMain.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionsDelay: 250,
  });
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  lightbox.open();
}

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ description, preview, original }) =>
        `<a class="gallery__link" href="${original}">
   <img
     class="gallery__image"
     src="${preview}"
     alt="${description}"
   />
 </a>`
    )
    .join("");
}
