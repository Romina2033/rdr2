document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const genero = document.getElementById('genero').value;
    const generoOtro = document.getElementById('generoOtro');
    const pronombres = document.querySelector('input[name="pronombres"]:checked');
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = '';

    if (!pronombres) {
        errorMessage.textContent = 'Por favor selecciona tus pronombres.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Las contraseñas no coinciden.';
        return;
    }

    const today = new Date();
    const birthDate = new Date(fechaNacimiento);
    let edad = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        edad--;
    }

    if (edad < 18) {
        errorMessage.textContent = 'Debes ser mayor de edad para registrarte.';
        return;
    }

    const existingUser = localStorage.getItem('user_' + username);
    if (existingUser) {
        errorMessage.textContent = 'El nombre de usuario ya está registrado.';
        return;
    }

    const newUser = {
        username: username,
        email: email,
        edad: edad,
        genero: genero === 'otro' ? generoOtro.value : genero,
        pronombres: pronombres.value,
        password: password
    };

    localStorage.setItem('user_' + username, JSON.stringify(newUser));

    alert('Cuenta creada exitosamente. Ahora puedes iniciar sesión.');
    window.location.href = '../../../index.html';
});



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
