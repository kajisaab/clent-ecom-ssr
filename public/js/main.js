const menuNavCategory = document.getElementById('menu_nav_category');
const mainMenuTab = document.getElementById('main__menu__tab');

console.log({ valueFromRoute });
// Check if the element exists
if (menuNavCategory) {
    // Add mouseover event listener to the element
    menuNavCategory.addEventListener('mouseover', (event) => {
        // Check if the main menu tab element exists
        if (mainMenuTab) {
            // Add the 'active' class to the main menu tab
            mainMenuTab.classList.add('menu__root__active');
            menuNavCategory.classList.add('category__hover');
            mainMenuTab.style.pointerEvents = 'all';
        }
    });

    menuNavCategory.addEventListener('mouseleave', (event) => {
        mainMenuTab.classList.remove('menu__root__active');
        menuNavCategory.classList.remove('category__hover');
    });

    mainMenuTab.addEventListener('mouseenter', (event) => {
        event.currentTarget.classList.add('menu__root__active');
        menuNavCategory.classList.add('category__hover');
        mainMenuTab.style.pointerEvents = 'all';
    });

    mainMenuTab.addEventListener('mouseleave', (event) => {
        event.currentTarget.classList.remove('menu__root__active');
        menuNavCategory.classList.remove('category__hover');
        mainMenuTab.style.pointerEvents = 'none';

        // removes all the sub menu
        document.querySelectorAll('ul').forEach((ul) => {
            ul.classList.remove('site__menu__sub__active');
        });
    });
}

// This is for the menu over and sub menu appearance
document.querySelectorAll('.menu__root__item').forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        let id = event.currentTarget.id;
        let correspondingSubMenu = document.querySelector(`.site-menu-sub.${id}`);
        if (correspondingSubMenu) {
            correspondingSubMenu.classList.add('site__menu__sub__active');
        }

        const mainMenu = document.getElementById(id);
        mainMenu.classList.add('main__menu__active');
    });

    element.addEventListener('mouseout', (event) => {
        let id = event.currentTarget.id;
        let correspondingSubMenu = document.querySelector(`.site-menu-sub.${id}`);
        if (correspondingSubMenu) {
            correspondingSubMenu.classList.remove('site__menu__sub__active');
        }

        let correspondingMenu = document.querySelector(`.main__menu.${id}.hover-effect`);
        const mainMenu = document.getElementById(id);

        mainMenu.classList.remove('main__menu__active');

        correspondingMenu.classList.remove('hover-effect');
    });
});

document.querySelectorAll('.site-menu-sub').forEach((subMenu) => {
    subMenu.addEventListener('mouseover', (event) => {
        const id = event.currentTarget.classList[1];
        const mainMenu = document.getElementById(id);
        mainMenu.classList.add('main__menu__active');
        let correspondingMenu = document.querySelector(`.main__menu.${id}`);
        correspondingMenu.classList.add('hover-effect');
        event.currentTarget.classList.add('site__menu__sub__active');
    });

    subMenu.addEventListener('mouseleave', (event) => {
        if (!event.currentTarget.matches(':hover') && !document.querySelector(`#${event.currentTarget.classList[1]}`).matches(':hover')) {
            const id = event.currentTarget.classList[1];
            const mainMenu = document.getElementById(id);
            mainMenu.classList.remove('main__menu__active');
            let correspondingMenu = document.querySelector(`.main__menu.${id}`);
            correspondingMenu.classList.remove('hover-effect');
            event.currentTarget.classList.remove('site__menu__sub__active');
        }
    });
});

document.querySelectorAll('.site__menu__sub__item').forEach((subItem) => {
    subItem.addEventListener('mouseover', (event) => {
        let subMenu = event.currentTarget.querySelector('.site__menu__grand');
        if (subMenu) {
            subMenu.classList.add('site__menu__grand__active');
        }
    });

    subItem.addEventListener('mouseout', (event) => {
        let subMenu = event.currentTarget.querySelector('.site__menu__grand');
        if (subMenu) {
            subMenu.classList.remove('site__menu__grand__active');
        }
    });
});
