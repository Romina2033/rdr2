
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');

menuIcon.addEventListener('click', () => {
    document.body.classList.add('menu-open');
});

closeMenu.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
});

document.querySelectorAll('.ver-mas').forEach((btn) => {
    btn.addEventListener('click', () => {
        const parent = btn.closest('.desafio-box'); 
        const hiddenContent = parent.querySelector('.hidden'); 


        if (hiddenContent.style.maxHeight) {
            hiddenContent.style.maxHeight = null; 
            btn.textContent = 'Ver más'; 
        } else {
            hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px'; 
            btn.textContent = 'Ver menos'; 
        }
    });
});
