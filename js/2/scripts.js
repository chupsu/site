const hero = document.querySelector('.action__hero');
const places = document.querySelectorAll('.action__placeholder');

hero.addEventListener('dragstart', dragstart);
hero.addEventListener('dragend', dragend);

for (const place of places) {
  place.addEventListener('dragover', dragover);
  place.addEventListener('dragenter', dragenter);
  place.addEventListener('dragleave', dragleave);
  place.addEventListener('drop', dragdrop);
}

function dragstart(event) {
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
  event.target.classList.remove('hold', 'hide');
}

function dragover(event) {
  event.preventDefault();
}
function dragenter(event) {
  event.target.classList.add('hovered');
}
function dragleave(event) {
  event.target.classList.remove('hovered');
}
function dragdrop(event) {
  event.target.classList.remove('hovered');
  event.target.append(hero);
}