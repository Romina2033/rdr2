document.addEventListener('DOMContentLoaded', function() {
    // Crear el popup
    const anuncio = document.createElement('div');
    anuncio.id = 'anuncio';
    anuncio.className = 'alert alert-warning text-center p-4 mt-4';
    
    anuncio.innerHTML = `
        <button class="close-btn">&times;</button>
        <div class="container">
            <h3 class="alert-heading">¡Atención!</h3>
            <p class="mb-4">¿Quieres completar los desafíos al 100%? Consulta nuestra guía completa para obtener todos los consejos y trucos necesarios.</p>
            <a href="ayuda/ayuda.html" class="btn btn-dark btn-lg">¡Haz clic aquí!</a>
        </div>
    `;

    // Insertar el anuncio en el documento
    document.body.appendChild(anuncio);

    // Función para mostrar el popup
    function mostrarPopup() {
        anuncio.classList.add('mostrar');
    }

    // Función para ocultar el popup y hacer que reaparezca en 10 segundos
    function ocultarPopup() {
        anuncio.classList.remove('mostrar');
        setTimeout(mostrarPopup, 10000); // Reaparece después de 10 segundos
    }

    // Mostrar el popup tras una pequeña demora inicial
    setTimeout(mostrarPopup);

    // Cerrar el popup al hacer clic en la "X"
    const closeBtn = anuncio.querySelector('.close-btn');
    closeBtn.addEventListener('click', ocultarPopup);
});


const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');

menuIcon.addEventListener('click', () => {
    document.body.classList.add('menu-open');
});

closeMenu.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
});
