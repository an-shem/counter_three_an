let count = 0;

const screen = document.querySelector('.screen');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');

increaseBtn.addEventListener('click', () => {
  count++;
  screen.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  count--;
  screen.textContent = count;
});