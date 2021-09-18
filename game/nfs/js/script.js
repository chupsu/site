'use strict';

const game        = document.querySelector('.game'),
      score       = document.querySelector('.game__score'),
      start       = document.querySelector('.game__start'),
      gameArea    = document.querySelector('.game__area'),
      car         = document.createElement('div'),
      MAX_ENEMY   = 7,
      HEIGHT_ELEM = 100,
      keys = {
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false
      },
      setting = {
        start: false,
        score: 0,
        speed: 17,
        traffic: 2.5
      };

function getQuantityElements(heightElement){
  return (gameArea.offsetHeight / heightElement) + 1;
}
const getRandomEnemy = (max) => Math.floor((Math.random() * max) + 1);

function playGame() {
  if (setting.start){
    setting.score += setting.speed;
    score.textContent = 'Вы проехали: ' + Math.floor(setting.score / 100) +'м';
    moveRoad();
    moveEnemy();

    if (keys.ArrowLeft && setting.x > 0) {
      setting.x -= setting.speed;
    }
    if (keys.ArrowRight && setting.x < (gameArea.offsetWidth - car.offsetWidth)) {
      setting.x += setting.speed;
    }
    if (keys.ArrowUp && setting.y > 0) {
      setting.y -= setting.speed;
    }
    if (keys.ArrowDown && setting.y < (gameArea.offsetHeight - car.offsetHeight)) {
      setting.y += setting.speed;
    }

    car.style.left = setting.x + 'px';
    car.style.top  = setting.y + 'px';
    requestAnimationFrame(playGame);
  }
}
function startGame() {
  start.classList.add('game__start--hide');
  game.classList.remove('game--menu');
  score.classList.remove('game__score--menu');
  car.style.top = 'auto';
  car.style.bottom = '20px';
  car.style.left = gameArea.offsetWidth/2 - car.offsetWidth/2;

  for (let i = 0; i < getQuantityElements(HEIGHT_ELEM); i++) {
    const line = document.createElement('div');
    line.classList.add('track__line')
    line.style.top = (i * HEIGHT_ELEM) + 'px';
    line.style.height = (HEIGHT_ELEM / 2) + 'px';
    line.y = i * HEIGHT_ELEM;
    gameArea.append(line);
  }

  for (let i = 0; i < getQuantityElements(HEIGHT_ELEM * setting.traffic); i++){
    const enemy = document.createElement('div');

    enemy.classList.add('track__traffic');
    enemy.y = -HEIGHT_ELEM * setting.traffic * (i +1);
    enemy.style.top  = enemy.y + 'px';
    enemy.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - 50)) +'px';
    enemy.style.background = `
      transparent
      url(./img/enemy${getRandomEnemy(MAX_ENEMY)}.png)
      center / contain
      no-repeat`;
    gameArea.append(enemy);
  }

  setting.score = 0;
  setting.start = true;
  gameArea.append(car);
  setting.x = car.offsetLeft;
  setting.y = car.offsetTop;
  requestAnimationFrame(playGame);

}
function moveRoad() {
  let lines = document.querySelectorAll('.track__line');

  lines.forEach(function(line){
    line.y += setting.speed;
    line.style.top = line.y + 'px';

    if (line.y >= gameArea.offsetHeight){
      line.y = -HEIGHT_ELEM;
    }
  });
}
function moveEnemy(){
  let enemy = document.querySelectorAll('.track__traffic');

  enemy.forEach(function(item){
    let carRect   = car.getBoundingClientRect();
    let enemyRect = item.getBoundingClientRect();

    if (carRect.top <= enemyRect.bottom && 
        carRect.right >= enemyRect.left && 
        carRect.left <= enemyRect.right && 
        carRect.bottom >= enemyRect.top) {
          setting.start = false;
          start.classList.remove('game__start--hide');
          game.classList.add('game--menu');
          score.classList.add('game__score--menu');
          gameArea.innerHTML = '';
        }

    item.y += setting.speed / 2;
    item.style.top = item.y + 'px';

    if (item.y >= gameArea.offsetHeight){
      item.y = -HEIGHT_ELEM * setting.traffic;
      item.style.left = Math.floor(Math.random() * (gameArea.offsetWidth - car.offsetWidth)) +'px';
    }
  });
}
function startRun(event) {
  if(keys.hasOwnProperty(event.key)) {
    event.preventDefault();
    keys[event.key] = true;
  }
}
function stopRun(event) {
  if(keys.hasOwnProperty(event.key)) {
    event.preventDefault();
    keys[event.key] = false;
  }
}

car.classList.add('track__car');
start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);


function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
  
  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
  });;