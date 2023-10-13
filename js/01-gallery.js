import { galleryItems } from "./gallery-items.js";

const parentElement = document.querySelector(".gallery");

const galleryHTML = galleryItems
  .map(
    (item) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>
`
  )
  .join("");

parentElement.insertAdjacentHTML("beforeend", galleryHTML);

parentElement.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const largeImageURL = event.target.dataset.source;

    const instance = basicLightbox.create(`
      <img src="${largeImageURL}" width="500" height="300">
    `);
    instance.show();
  }
});
