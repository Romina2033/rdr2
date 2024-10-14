
    // Generar un número de seguimiento aleatorio
    function generateTicketNumber() {
        return Math.floor(Math.random() * 1000000); 
    }

    // Mostrar el número de seguimiento en la página
    document.getElementById('ticket-number').textContent = generateTicketNumber();

    