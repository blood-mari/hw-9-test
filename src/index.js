import boxGallery from './functionalJS/galItems'

import {parentGalleryEl, onGalleryCreate } from "./functionalJS/gallItemsCreate"

parentGalleryEl.insertAdjacentHTML('beforeend', onGalleryCreate(boxGallery));

parentGalleryEl.addEventListener('click', modalOperate.onOpenModal);

modalOperate.refs.backDrop.addEventListener('click', modalOperate.onCloseModal);

import modalOperate from './functionalJS/openModal'




