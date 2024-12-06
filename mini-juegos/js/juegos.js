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
let errorCount = 0;
let timeLimit = 10; 
let timer;

function generateCards() {
  currentCard = Math.floor(Math.random() * 10) + 1;
  hiddenCard = Math.floor(Math.random() * 10) + 1;

  document.getElementById('visible-card-img').src = `./img/${currentCard}.jpg`;
  document.getElementById('hidden-card-img').src = './img/atras.jpg';
  document.getElementById('result-message').textContent = '';
  document.getElementById('hint').style.display = 'none';
  document.getElementById('buy-joker').disabled = false;

  hintUsed = false;
  startTimer();
}

function startTimer() {
  clearTimeout(timer);
  let timeLeft = timeLimit;
  const timerDisplay = document.getElementById('result-message');
  
  const countdown = () => {
    if (timeLeft > 0) {
      timerDisplay.textContent = `Tiempo restante: ${timeLeft} segundos`;
      timeLeft--;
      timer = setTimeout(countdown, 1000);
    } else {
      timerDisplay.textContent = "¡Se acabó el tiempo!"; 
      revealHiddenCard(); 
      setTimeout(generateCards, 1000); 
    }
  };
  countdown();
}

function checkAnswer(answer) {
  clearTimeout(timer); 

  let isCorrect = false;
  if (answer === 'less' && hiddenCard < currentCard) {
    isCorrect = true;
  } else if (answer === 'equal' && hiddenCard === currentCard) {
    isCorrect = true;
  } else if (answer === 'greater' && hiddenCard > currentCard) {
    isCorrect = true;
  }

  const resultMessage = document.getElementById('result-message');

  if (isCorrect) {
    points += 5;
    resultMessage.textContent = '¡Correcto!';
    errorCount = 0;
  } else {
    points -= 2;
    errorCount++;
    resultMessage.textContent = '¡Incorrecto!';

    if (errorCount >= 3) {
      points -= 5;
      resultMessage.textContent += ' Penalización por errores consecutivos.';
      errorCount = 0; 
    }
  }

  updatePointsDisplay();
  revealHiddenCard();
  setTimeout(generateCards, 1000);
}

function revealHiddenCard() {
  document.getElementById('hidden-card-img').src = `./img/${hiddenCard}.jpg`;
}

function updatePointsDisplay() {
  document.getElementById('points').textContent = points;
}


function revealHiddenCard() {
  document.getElementById('hidden-card-img').src = `./img/${hiddenCard}.jpg`;
}
function buyJoker() {
  const jokerCost = hintUsed ? 20 : 10; 
  if (points >= jokerCost && !hintUsed) {
    points -= jokerCost; 
    document.getElementById('points').textContent = points; 
    hintUsed = true;


    let hintMessage = getHint(currentCard);
    document.getElementById('hint-text').textContent = hintMessage;


    document.getElementById('hint').style.display = 'block';
    document.getElementById('buy-joker').disabled = true;
  } else if (hintUsed) {
    alert("Ya has usado la carta comodín. El siguiente uso cuesta más puntos.");
  } else {
    alert("No tienes suficientes puntos para comprar el comodín.");
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

