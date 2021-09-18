const startBtn = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = [
  '#000080', '#00008B', '#0000CD', '#0000FF', '#006400', '#008000', '#008080', '#008B8B', '#00BFFF', '#00CED1', '#00FA9A', '#00FF00', '#00FF7F', '#00FFFF', '#00FFFF', '#191970', '#1E90FF', '#20B2AA', '#228B22', '#2E8B57', '#2F4F4F', '#32CD32', '#3CB371', '#40E0D0', '#4169E1', '#4682B4', '#483D8B', '#48D1CC', '#4B0082', '#556B2F', '#5F9EA0', '#6495ED', '#66CDAA', '#696969', '#6A5ACD', '#6B8E23', '#708090', '#778899', '#7B68EE', '#7CFC00', '#7FFF00', '#7FFFD4', '#800000', '#800080', '#808000', '#808080', '#87CEEB', '#87CEFA', '#8A2BE2', '#8B0000', '#8B008B', '#8B4513', '#8FBC8F', '#90EE90', '#9370D8', '#9400D3', '#98FB98', '#9932CC', '#9ACD32', '#A0522D', '#A52A2A', '#A9A9A9', '#ADD8E6', '#ADFF2F', '#AFEEEE', '#B0C4DE', '#B0E0E6', '#B22222', '#B8860B', '#BA55D3', '#BC8F8F', '#BDB76B', '#C0C0C0', '#C71585', '#CD5C5C', '#CD853F', '#D2691E', '#D2B48C', '#D3D3D3', '#D87093', '#D8BFD8', '#DA70D6', '#DAA520', '#DC143C', '#DCDCDC', '#DDA0DD', '#DEB887', '#E0FFFF', '#E6E6FA', '#E9967A', '#EE82EE', '#EEE8AA', '#F08080', '#F0E68C', '#F0F8FF', '#F0FFF0', '#F0FFFF', '#F4A460', '#F5DEB3', '#F5F5DC', '#F5F5F5', '#F5FFFA', '#F8F8FF', '#FA8072', '#FAEBD7', '#FAF0E6', '#FAFAD2', '#FDF5E6', '#FF0000', '#FF00FF', '#FF00FF', '#FF1493', '#FF4500', '#FF6347', '#FF69B4', '#FF7F50', '#FF8C00', '#FFA07A', '#FFA500', '#FFB6C1', '#FFC0CB', '#FFD700', '#FFDAB9', '#FFDEAD', '#FFE4B5', '#FFE4C4'];
let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
  event.preventDefault();
  screens[0].classList.add('up');
});
timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
});
board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}
function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      timeEl.classList.add('blink');
    }
    setTime(current);
  }
}
function setTime(value) {
  timeEl.innerHTML = `${value} сек`;
}
function finishGame() {
  timeEl.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span><h1>`;
}
function createRandomCircle() {
  const circle = document.createElement('div');
  const size = getRandomNumber(8, 50);
  const {width, height} = board.getBoundingClientRect();
  const x = getRandomNumber(0, width - size);
  const y = getRandomNumber(0, height - size);
  const color = getRandomColor();
  
  circle.style.backgroundColor = color;
  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left =`${x}px`;

  board.append(circle);
}
function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}