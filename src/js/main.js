
const mainSlider = new Swiper('.mainSlider__container', {
    pagination: {
        el: '.mainSlider__pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.mainSlider__button-next',
        prevEl: '.mainSlider__button-prev',
    },
});

const noveltiesSlider = new Swiper('.novelties__slider', {
    freeMode: true,
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,
    navigation: {
        nextEl: '.novelties__button-next',
        prevEl: '.novelties__button-prev',
    },
});

const bestsellersSlider = new Swiper('.bestsellers__slider', {
    freeMode: true,
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,
    navigation: {
        nextEl: '.bestsellers__button-next',
        prevEl: '.bestsellers__button-prev',
    },
});

const gallerySlider = new Swiper(".gallery__slider", {
    autoplay: {
        delay: 5000,
    },
    freeMode: true,
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,
});
