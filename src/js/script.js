if (window.innerWidth <= 1600) {
    function showMenu (trigger) {
        const menu = document.querySelector('.header__nav');
        if (menu.style.maxHeight) {
            menu.style.maxHeight = null;
            trigger.classList.remove('active');
            const dropSubList = document.querySelectorAll('.dropSubList');
            dropSubList.forEach((el) => {
                el.style.maxHeight = null;
            })

            const activeTriggers = menu.querySelectorAll('.active');
            activeTriggers.forEach((el) => {
                el.classList.remove('active');
            })

            document.querySelector('body').style.overflow = 'inherit';
            document.querySelector('.header__overlay').style.display = 'none';
        } else {
            menu.style.maxHeight = `${menu.scrollHeight}px`;
            trigger.classList.add('active');
            document.querySelector('body').style.overflow = 'hidden';
            document.querySelector('.header__overlay').style.display = 'block';
        }
    }

    function showSubMenu () {
        event.preventDefault();
        const target = event.target;

        if (target.classList.contains('header__nav-link')
            || target.closest('.header__nav-link')) {
             const itemContainer = target.closest('.header__nav-item');
             const dropList =  itemContainer.querySelector('.header__drop-wrapper');
             const menu = document.querySelector('.header__nav');

             if (dropList.style.maxHeight) {
                dropList.style.maxHeight = null;
                itemContainer.classList.remove('active');
                menu.style.maxHeight = `${menu.scrollHeight}px`;
              } else {
                dropList.style.maxHeight = `${dropList.scrollHeight}px`;
                itemContainer.classList.add('active');
                menu.style.maxHeight = `${menu.scrollHeight + dropList.scrollHeight}px`;
              }
        }

        if (target.classList.contains('header__drop-title')) {
            const dropList = target.closest('.header__drop-item').nextElementSibling;
            const dropParent =  dropList.closest('.header__drop-wrapper');
            const menu = document.querySelector('.header__nav');
            if (dropList.style.maxHeight) {
                dropList.style.maxHeight = null;
                target.classList.remove('active');
                dropParent.style.maxHeight = `${dropParent.scrollHeight}px`;
                menu.style.maxHeight = `${menu.scrollHeight + dropParent.scrollHeight}px`;
            } else {
                dropList.style.maxHeight = `${dropList.scrollHeight}px`;
                target.classList.add('active');
                dropParent.style.maxHeight = `${dropParent.scrollHeight + dropList.scrollHeight}px`;
                menu.style.maxHeight = `${menu.scrollHeight + dropParent.scrollHeight + dropList.scrollHeight}px`;
            }
        }
    }

    const headerNavList = document.querySelector('.header__nav-list');
    headerNavList.addEventListener('click', () => showSubMenu());
    const menuBurgerTrigger = document.querySelector('.header__burger-wrap');
    menuBurgerTrigger.addEventListener('click', () => showMenu(menuBurgerTrigger))
    const headerOverlay = document.querySelector('.header__overlay');
    headerOverlay.addEventListener('click', () => showMenu(menuBurgerTrigger));
}

if (window.innerWidth <= 768) {
    function showSearch () {
        event.preventDefault();
        const header = document.querySelector('.header');
        const searchSec = header.querySelector('.header__search');
        searchSec.classList.add('active');
        const searchField = searchSec.querySelector('#search');
        searchField.focus();
        header.style.height = '90px';
        const menu = header.querySelector('.header__nav');
        const menuTrigger = header.querySelector('.header__burger-wrap');
        menu.style.maxHeight = null;
        menuTrigger.classList.remove('active');

        const closeBtn = header.querySelector('.header__search-close');
        closeBtn.addEventListener('click', () => {searchClose()}, {once: true})
    }

    function searchClose () {
        event.preventDefault();
        const header = document.querySelector('.header');
        const searchSec = header.querySelector('.header__search');
        searchSec.classList.remove('active');
        header.style.height = '40px';
    }

    const searchTrigger = document.querySelector('.header__search-btn');
    searchTrigger.addEventListener('click', () => showSearch());
}

function setStatusItemsActive () {
    event.preventDefault();
    this.classList.toggle('active');
}

const statusElements = document.querySelectorAll('[data-item="status"]');
if (statusElements) {
    statusElements.forEach((el) => {
        el.addEventListener('click', setStatusItemsActive)
    })
}
