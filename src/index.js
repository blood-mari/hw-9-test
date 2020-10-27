import boxGallery from './functionalJS/galItems'

import {parentGalleryEl, currentIndex, onGalleryCreate } from "./functionalJS/gallItemsCreate"

parentGalleryEl.insertAdjacentHTML('beforeend', onGalleryCreate(boxGallery));

parentGalleryEl.addEventListener('click', onOpenModal);

refs.backDrop.addEventListener('click', onCloseModal);

import modalOperate from './functionalJS/openModal'




