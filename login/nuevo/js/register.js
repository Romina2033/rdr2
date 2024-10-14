document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const genero = document.getElementById('genero').value;
    const generoOtro = document.getElementById('generoOtro');
    const pronombres = document.getElementById('pronombres').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    // Limpiar mensajes previos
    errorMessage.textContent = '';

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Las contraseñas no coinciden.';
        return;
    }

    // Calcular la edad a partir de la fecha de nacimiento
    const today = new Date();
    const birthDate = new Date(fechaNacimiento);
    let edad = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Ajustar la edad si el cumpleaños aún no ha ocurrido en el año actual
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        edad--;
    }

    // Validar si el usuario es mayor de edad (18 años)
    if (edad < 18) {
        errorMessage.textContent = 'Debes ser mayor de edad para registrarte.';
        return;
    }

    // Validar si el nombre de usuario ya existe
    const existingUser = localStorage.getItem('user_' + username);
    if (existingUser) {
        errorMessage.textContent = 'El nombre de usuario ya está registrado.';
        return;
    }

    // Guardar el nuevo usuario en localStorage
    const newUser = {
        username: username,
        email: email,
        edad: edad,
        genero: genero === 'otro' ? generoOtro.value : genero, // Usar el valor "Otro" si se especifica
        pronombres: pronombres,
        password: password
    };

    localStorage.setItem('user_' + username, JSON.stringify(newUser));

    // Registro exitoso
    alert('Cuenta creada exitosamente. Ahora puedes iniciar sesión.');
    window.location.href = '../login.html'; // Redirigir al login después de registrarse
});


// Función para mostrar/ocultar el campo "Otro" en género
function toggleGeneroOtro() {
    const genero = document.getElementById('genero').value;
    const generoOtro = document.getElementById('generoOtro');

    if (genero === 'otro') {
        generoOtro.style.display = 'block';
        generoOtro.required = true;
    } else {
        generoOtro.style.display = 'none';
        generoOtro.required = false;
    }
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
}
