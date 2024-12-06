document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content');
    const span = document.querySelector('.modal-close');


    modal.style.display = "none";


    function mostrarImagen(src) {
        modal.style.display = "flex"; 
        modalImg.src = src; 
    }


    span.onclick = function() {
        modal.style.display = "none";
    }


    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    document.querySelectorAll('.clickable').forEach(img => {
        img.addEventListener('click', function() {
            mostrarImagen(this.src);
        });
    });
});



/* menu */ 

const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');

menuIcon.addEventListener('click', () => {
    document.body.classList.add('menu-open');
});

closeMenu.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
});

