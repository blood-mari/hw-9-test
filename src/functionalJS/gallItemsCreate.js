// Создание галлереи

export const parentGalleryEl = document.querySelector('.js-gallery');

export let currentIndex;

export function onGalleryCreate(pictures) {
    return pictures.map(({original, preview, desc}, currentIndex) => {
      return  `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      loading="lazy"
      class="gallery__image lazyload"
      src="${preview}"
      data-source="${original}"
      alt="${desc}"
      data-index="${currentIndex}"
    />
  </a>
</li>
    `;
    }).join('');

};