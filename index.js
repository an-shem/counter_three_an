const screen = document.querySelector('.screen');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');

let count = 0;

increaseBtn.addEventListener('click', () => {
  count++;
  screen.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  count--;
  screen.textContent = count;
});
