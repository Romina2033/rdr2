document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');


    errorMessage.textContent = '';

    const storedUser = localStorage.getItem('user_' + username);
    
    if (storedUser) {
        const user = JSON.parse(storedUser);


        if (user.password === password) {
            alert('¡BIENVENIDXS!');
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = './home/index.html'; 
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
