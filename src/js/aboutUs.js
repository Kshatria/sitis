const infoSlider = new Swiper('.infoPage__main-slider', {
    loop: true,
    pagination: {
        el: '.infoPage__pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.infoPage__button-next',
        prevEl: '.infoPage__button-prev',
    },
});

var equipSlider = new Swiper(".equip__slider", {
    freeMode: true,
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,
    scrollbar: {
    el: ".equip__scrollbar",
    },
    navigation: {
    nextEl: ".equip__button-next",
    prevEl: ".equip__button-prev",
    }
});