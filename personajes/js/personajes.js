

const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');

menuIcon.addEventListener('click', () => {
    document.body.classList.add('menu-open');
});

closeMenu.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
});


document.addEventListener('DOMContentLoaded', function () {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <div class="popup-header">
            <h5>¡Atención!</h5>
            <button class="popup-close">&times;</button>
        </div>
        <div class="popup-body">
            <p>¡Mira esta increíble entrevista con Roger Clark y Rob Weithoff!</p>
            <button class="btn btn-primary">Ver Guía</button>
        </div>
    `;


    document.body.appendChild(popup);


    function mostrarPopup() {
        popup.style.display = 'block';
    }


    function ocultarPopup() {
        popup.style.display = 'none';


        setTimeout(mostrarPopup, 10000);
    }


    function redirigir() {
        window.location.href = './noticia/index.html';
    }


    setTimeout(mostrarPopup, 5000);


    const closeBtn = popup.querySelector('.popup-close');
    closeBtn.addEventListener('click', ocultarPopup);


    const verGuiaBtn = popup.querySelector('.btn.btn-primary');
    verGuiaBtn.addEventListener('click', redirigir);
});
