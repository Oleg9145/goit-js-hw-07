import { galleryItems } from "./gallery-items.js";

// Change code below this line

const parentElement = document.querySelector(".gallery");

const galleryHTML = galleryItems
  .map(
    (item) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
       <img class="gallery__image" src=" ${item.preview}" alt="${item.description}" />
    </a>
 </li>
`
  )
  .join("");

parentElement.insertAdjacentHTML("beforeend", galleryHTML);
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionType: "data-alt",
  captionsData: "alt",
});
parentElement.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
  }
});
