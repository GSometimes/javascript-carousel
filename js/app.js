const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let index = 0;
// let interval = setInterval(run, 2500);

function run() {
  index++;
  changeImage();
}

function changeImage() {
  if (index > images.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }

  slider.style.transform = `translateX(${-index * 600}px)`;
}

// function resetInterval() {
//   clearInterval(interval); // so interval doesn't interfere with manual switches
//   interval = setInterval(run, 2500); // re-set the same interval with count startin after click
// }

right.addEventListener('click', () => {
  index++;
  changeImage();
  //   resetInterval();
});

left.addEventListener('click', () => {
  index--;
  changeImage();
  //   resetInterval();
});
