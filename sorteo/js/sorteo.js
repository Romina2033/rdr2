const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');

menuIcon.addEventListener('click', () => {
    document.body.classList.add('menu-open');
});


document.addEventListener('DOMContentLoaded', function() {
    
    const checkboxes = document.querySelectorAll('input[name="actualizaciones"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;  
                }
            });
        });
    });

});



document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('sorteo-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        

        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
        const correo = document.getElementById('correo').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const pais = document.getElementById('pais').value;
        

        if (!nombre || !apellido || !fechaNacimiento || !correo || !telefono || !pais) {
            mostrarMensaje('Por favor, complete todos los campos del formulario.', 'error');
            return;
        }
        

        const hoy = new Date();
        const fechaNac = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - fechaNac.getFullYear();
        const mes = hoy.getMonth() - fechaNac.getMonth();
        
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
            edad--;
        }
        
        if (edad < 18) {
            mostrarMensaje('Lo sentimos, debes ser mayor de 18 años para participar en el sorteo.', 'error');
            return;
        }
        

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            mostrarMensaje('Por favor, ingrese un correo electrónico válido.', 'error');
            return;
        }
        

        const phoneRegex = /^\d{7,}$/;
        if (!phoneRegex.test(telefono)) {
            mostrarMensaje('Por favor, ingrese un número de teléfono válido (solo números, mínimo 7 dígitos).', 'error');
            return;
        }


        window.location.href = 'seguimiento/index.html';


    });


    function mostrarMensaje(mensaje, tipo) {

        const mensajeElement = document.createElement('div');
        mensajeElement.textContent = mensaje;
        mensajeElement.className = `alert alert-${tipo === 'error' ? 'danger' : 'success'} mt-3`;
        

        form.parentNode.insertBefore(mensajeElement, form.nextSibling);
        

    }
});
