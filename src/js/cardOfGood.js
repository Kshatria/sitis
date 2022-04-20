const contentNav = new Swiper(".product__tabs-nav", {
    freeMode: true,
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,
 });

function toggleActiveAccIcons (item) {
    event.preventDefault();
    item.classList.toggle('active');
}

const accIcons = document.querySelectorAll('.product__acc-link');
accIcons.forEach((el) => {
    el.addEventListener('click', () => toggleActiveAccIcons(el));
})

function checkTabs () {
    const target = event.target.getAttribute('data-id');
    const tabsSections = document.querySelectorAll('.product__tab');
    const tabsNavBtns = document.querySelectorAll('.product__tab-btn');

    tabsNavBtns.forEach((el) => {
        el.classList.remove('active');
    })


    tabsSections.forEach((el) => {
        el.classList.remove('active');
    })

    const activeTab = document.querySelectorAll(`[data-id="${target}"]`);
    activeTab.forEach((el) => {
        el.classList.add('active');
    })

}

const tabsNav = document.querySelectorAll('.product__tab-btn');
tabsNav.forEach((el) => {
    el.addEventListener('click', () => checkTabs());
})

if (window.innerWidth <= 1200) {

    function relocateSidebar () {
        const sidebar = document.querySelector('.product__info');
        const sidebarClone = sidebar.cloneNode(true);
        sidebar.remove();

        const sliderContainer = document.querySelector('.product__image-slider');
        sliderContainer.insertAdjacentElement('afterend', sidebarClone)
    }

    relocateSidebar();
}

if (window.innerWidth <= 768) {
    const sliderWrap = document.querySelector('.product__image-wrapper');
    sliderWrap.classList.add('swiper-wrapper');

    const sliderImage = new Swiper('.product__image-slider', {
        pagination: {
            el: '.product__pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.product__button-next',
            prevEl: '.product__button-prev',
        },
    });
}