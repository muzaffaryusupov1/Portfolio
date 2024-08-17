// const button = document.querySelector('.header-mobile__button')

// button.addEventListener('click', function(){
//     button.classList.add('active')
// })

window.addEventListener("DOMContentLoaded", (event) => {
    const button = document.querySelector('.header-mobile__button');
    const popupMenu = document.querySelector('.popup-menu');
    button.addEventListener('click', function () {
        if (popupMenu.classList.contains('active')) {
            popupMenu.classList.remove('active')
            button.classList.remove('active')
        } else {
            popupMenu.classList.add('active')
            button.classList.add('active')
        }
    });

    document.querySelectorAll(".popup-menu__link").forEach(n =>
        n.addEventListener("click", () => {
            button.classList.remove("active");
            popupMenu.classList.remove("active");
        })
    );
});