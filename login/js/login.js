document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Limpiar mensaje previo de error
    errorMessage.textContent = '';

    // Buscar al usuario en localStorage
    const storedUser = localStorage.getItem('user_' + username);
    
    if (storedUser) {
        const user = JSON.parse(storedUser);

        // Verificar si la contraseña coincide
        if (user.password === password) {
            alert('¡BIENVENIDXS!');
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = '../home/home.html'; // Redirigir a la página principal
        } else {
            errorMessage.textContent = 'Error, contraseña incorrecta.';
        }
    } else {
        errorMessage.textContent = 'Error, usuario no encontrado.';
    }
});

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
}
