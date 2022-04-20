var popupSlider = new Swiper(".popup__slider", {
    navigation: {
        nextEl: ".popup__button-next",
        prevEl: ".popup__button-prev",
    },
});

 function toggleActiveAccIcons (item) {
    event.preventDefault();
    item.classList.toggle('active');
}

const accIcons = document.querySelectorAll('.popup__acc-link');
accIcons.forEach((el) => {
    el.addEventListener('click', () => toggleActiveAccIcons(el));
})