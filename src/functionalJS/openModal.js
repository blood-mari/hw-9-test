const refs = {
    bigPicture: document.querySelector('.lightbox__image'),
    backDrop: document.querySelector('.lightbox__overlay'),
    openModal: document.querySelector('.js-lightbox'),
    closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
}

function onOpenModal(ev) {
    ev.preventDefault();

    if (ev.target.nodeName !== "IMG") {
        return;
    }

    refs.openModal.classList.add('is-open');

    document.addEventListener('keydown', onPressHandler);

        refs.bigPicture.src = ev.target.dataset.source;
    refs.bigPicture.alt = ev.target.alt;

    currentIndex = Number(ev.target.dataset.index);

        refs.closeModalBtn.addEventListener('click', onCloseModal, ({ once: true }))

}

function moveImageLeft(ev) {

    if (currentIndex === 0) { currentIndex = boxGallery.length; }

    currentIndex -= 1;

    const previousPic = boxGallery[currentIndex].original;

    refs.bigPicture.setAttribute("src", previousPic);

    refs.bigPicture.setAttribute("alt", previousPic);

}

function moveImageRight(ev) {

      if (currentIndex === boxGallery.length - 1) {
        currentIndex = -1;
        }
        currentIndex += 1;
    const nextPic = boxGallery[currentIndex].original;

    refs.bigPicture.setAttribute("src", nextPic);
    refs.bigPicture.setAttribute("alt", nextPic);

    }

function onPressHandler(ev) {
    if (ev.code === "Escape" || ev.currentTarget === refs.backDrop) onCloseModal();
    if (ev.code === 'ArrowLeft') moveImageLeft();
    if (ev.code === 'ArrowRight') moveImageRight();
}

function onCloseModal() {

    refs.openModal.classList.remove('is-open');
    refs.bigPicture.src = '';
    refs.bigPicture.alt = '';
}

export default { refs, onOpenModal, moveImageLeft, moveImageRight, onPressHandler, onCloseModal };