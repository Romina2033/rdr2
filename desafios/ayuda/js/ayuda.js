
window.onload = function() {
    setTimeout(function() {
        document.getElementById('popup').style.display = 'block';
    }, 2000); // Muestra el popup después de 2 segundos
};

document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.getElementById('popup-close');
    var likeButton = document.getElementById('like-button');
    var popup = document.getElementById('popup');

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            popup.style.display = 'none';
            setTimeout(function() {
                popup.style.display = 'block';
            }, 10000); 
        });
    }

    if (likeButton) {
        likeButton.addEventListener('click', function(event) {
            // Crear múltiples corazones pequeños
            for (var i = 0; i < 10; i++) {
                var heart = document.createElement('div');
                heart.classList.add('heart');
                heart.style.left = (event.clientX + Math.random() * 20 - 10) + 'px';
                heart.style.top = (event.clientY + Math.random() * 20 - 10) + 'px';
                document.body.appendChild(heart);

                // Eliminar el corazón después de la animación
                setTimeout(function(el) {
                    el.remove();
                }, 2000, heart);
            }

            // Aplicar animación al corazón principal
            this.classList.toggle('liked');
        });
    }
});
