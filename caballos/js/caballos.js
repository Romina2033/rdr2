document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content');
    const span = document.querySelector('.modal-close');

    // Oculta el modal por defecto
    modal.style.display = "none";

    // Función para mostrar el modal con la imagen ampliada
    function mostrarImagen(src) {
        modal.style.display = "flex"; 
        modalImg.src = src; 
    }

    // Cierra el modal al hacer clic en la 'X'
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Cierra el modal al hacer clic fuera de la imagen
    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Agrega el evento onclick a las imágenes con la clase 'clickable'
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

