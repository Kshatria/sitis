const modelSlider = new Swiper('.model__slider', {
    freeMode: true,
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,
    centeredSlidesBounds: true,
    pagination: {
        el: '.model__pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.model__button-next',
        prevEl: '.model__button-prev',
    },

    breakpoints: {
        768: {
            spaceBetween: 100
        },
    }
});

function toggleVisibleFilterList () {
    const target = event.target;
    if (target.classList.contains('drop-trigger')) {
        const dropList = target.nextElementSibling;
        if (dropList.style.maxHeight) {
            dropList.style.maxHeight = null;
            target.classList.remove('active');
        } else {
            target.classList.add('active');
            if (window.innerWidth <= 1200 && !target.classList.contains('filter__title')) {
                const form = document.querySelector('.filter__form');
                dropList.style.maxHeight = `${dropList.scrollHeight }px`;
                form.style.maxHeight = `${dropList.scrollHeight + form.scrollHeight}px`;
                return
            }
            dropList.style.maxHeight = `${dropList.scrollHeight}px`;
        }
    }
}

function clearAllFilterCheckboxes () {
    const form = document.querySelector('.filter__form');
    const checkboxes = form.querySelectorAll('[type="checkbox"]:checked');
    if (checkboxes) {
        checkboxes.forEach((el) => {
            el.checked = false;
        })
    }

    checkedFilterItemsCount();
}

function checkedFilterItemsCount () {
    const form = document.querySelector('.filter__form');
    const checkboxes = form.querySelectorAll('[type="checkbox"]:checked');

    const countOutput = document.querySelector('.filter__count-checked');
    if (checkboxes.length !== 0) {
        countOutput.style.display = 'inline-block';
        countOutput.textContent = checkboxes.length;
    } else {
        countOutput.style.display = 'none';
    }
}

function toggleVisibleSortList(target) {
    const dropList = target.nextElementSibling;
    if (dropList.style.maxHeight) {
        dropList.style.maxHeight = null;
        target.classList.remove('active');
    } else {
        target.classList.add('active');
        dropList.style.maxHeight = `${dropList.scrollHeight}px`;
    }
}

function checkMobileActiveSort () {
    const mobileSortRadio = document.querySelectorAll("[name='mobileSort']");
    for (el of mobileSortRadio) {
        if (el.checked) {
            const sortTrigger = document.querySelector('.catalogList__sort-title');
            sortTrigger.textContent = this.value;
        }
    }
}

const clearAllBtn = document.querySelector('.filter__clearAll');
clearAllBtn.addEventListener('click', clearAllFilterCheckboxes);

const filterForm = document.querySelector('.filter__form');
filterForm.addEventListener('click', () => toggleVisibleFilterList())

if (window.innerWidth <= 1200) {
    checkedFilterItemsCount();
    const form = document.querySelector('.filter__form');
    const checkboxes = form.querySelectorAll('[type="checkbox"]');
    checkboxes.forEach((el) => {
        el.addEventListener('change', checkedFilterItemsCount);
    })
    const filtersTitle = document.querySelector('.filter__title');
    filtersTitle.addEventListener('click', () => toggleVisibleFilterList());

    const sortTrigger = document.querySelector('.catalogList__sort-title');
    sortTrigger.addEventListener('click', () => toggleVisibleSortList(sortTrigger));

    const mobileSortRadio = document.querySelectorAll("[name='mobileSort']");
    mobileSortRadio.forEach((el) => {
        el.addEventListener('click', checkMobileActiveSort);
    })
}
