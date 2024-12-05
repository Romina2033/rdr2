const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.menu-close');

menuIcon.addEventListener('click', () => {
    document.body.classList.add('menu-open');
});

closeMenu.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
});

let points = 0;
let currentCard = 0;
let hiddenCard = 0;
let hintUsed = false;

function generateCards() {
  currentCard = Math.floor(Math.random() * 10) + 1;
  hiddenCard = Math.floor(Math.random() * 10) + 1;
  
  // Actualiza las imágenes de las cartas
  document.getElementById('visible-card-img').src = `./img/${currentCard}.png`;
  document.getElementById('hidden-card-img').src = './img/atras.png';
  
  document.getElementById('result-message').textContent = '';
}

function checkAnswer(answer) {
  let isCorrect = false;
  if (answer === 'less' && hiddenCard < currentCard) {
    isCorrect = true;
  } else if (answer === 'equal' && hiddenCard === currentCard) {
    isCorrect = true;
  } else if (answer === 'greater' && hiddenCard > currentCard) {
    isCorrect = true;
  }

  const resultMessage = document.getElementById('result-message');
  const pointsDisplay = document.getElementById('points');
  const hiddenCardDisplay = document.getElementById('hidden-card-img');

  if (resultMessage && pointsDisplay && hiddenCardDisplay) {
    if (isCorrect) {
      points += 5;
      resultMessage.textContent = '¡Correcto!';
    } else {
      points -= 2;
      resultMessage.textContent = '¡Incorrecto!';
    }

    pointsDisplay.textContent = points;
    
    // Muestra la carta oculta
    hiddenCardDisplay.src = `./img/${hiddenCard}.png`;
  }

  setTimeout(generateCards, 1000);
}

function buyJoker() {
  if (points >= 10 && !hintUsed) {
    points -= 10;
    document.getElementById('points').textContent = points;
    hintUsed = true;
    let hintMessage = getHint();
    document.getElementById('hint-text').textContent = hintMessage;
    document.getElementById('hint').style.display = 'block';
  } else if (hintUsed) {
    alert("Ya has usado la carta comodín.");
  } else {
    alert("No tienes suficientes puntos.");
  }
}

function getHint(shownCard) {
  if (hiddenCard < shownCard) {
    return "La carta que se esconde es más pequeña que la que se revela al ojo.";
  } else if (hiddenCard === shownCard) {
    return "Ambas cartas susurran lo mismo, son iguales en su esencia.";
  } else if (hiddenCard > shownCard) {
    return "La carta oculta guarda un poder mayor al de la que muestras al mundo.";
  }
}


generateCards();
