import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

// Реализация делегирования на div.gallery и получение url большого изображения.

// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.

// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.

// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

console.log(galleryItems);

const galleryMain = document.querySelector(".gallery");
const imagesCreated = createGalleryItems(galleryItems);
galleryMain.insertAdjacentHTML("beforeend", imagesCreated);
galleryMain.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source} "width = 1200"">
`);

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  instance.show();
}

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ description, preview, original }) =>
        `<a class="gallery__link" href="large-image.jpg">
   <img
     class="gallery__image"
     src="${preview}"
     data-source="${original}"
     alt="${description}"
   />
 </a>`
    )
    .join("");
}
