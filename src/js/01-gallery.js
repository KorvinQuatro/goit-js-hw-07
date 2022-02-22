import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const cardsMarkup = galleryCards(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", cardsMarkup);

galleryEl.addEventListener("click", onGalleryElClick);

function galleryCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
  `;
    })
    .join("");
}

function onGalleryElClick(e) {
  e.preventDefault();
  const galleryImage = e.target.classList.contains("gallery__image");

  if (!galleryImage) {
    return;
  } else {
    const originalImg = e.target.dataset.source;
    basicLightbox.create(`<img src="${originalImg}">`).show();
  }
}
