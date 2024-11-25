
    function generateTicketNumber() {
        return Math.floor(Math.random() * 1000000); 
    }


    document.getElementById('ticket-number').textContent = generateTicketNumber();

    