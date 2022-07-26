// select elements that will be target with js
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

// define and index for currently displayed image
index = 0;

// write a function to change the image under certain conditions
function changeImage() {
  if (index < images.length - 1) {
    right.style.display = 'block';
  } else {
    right.style.display = 'none';
  }

  if (index > 0) {
    left.style.display = 'block';
  } else {
    left.style.display = 'none';
  }

  images.forEach((image) => {
    image.style.transition = 'all 0.3s ease-in-out';
    image.style.transform = `translateX(${-index * 600}px)`;
  });
}
left.style.display = 'none';

// write event listeners for the buttons
right.addEventListener('click', () => {
  index++;
  changeImage();
});

left.addEventListener('click', () => {
  index--;
  changeImage();
});

//   if (index === images.length - 1) {
//     // index = 0;
//     right.style.display = 'none';
//     left.style.display = 'block';
//   }
//   if (index === 0) {
//     // index = images.length - 1;
//     right.style.display = 'block';
//     left.style.display = 'none';
//   }

//   slider.style.transition = 'all 0.3s ease-in-out';
//   slider.style.transform = `translateX(${-index * 600}px)`;

// function resetInterval() {
//   clearInterval(interval); // so interval doesn't interfere with manual switches
//   interval = setInterval(run, 2500); // re-set the same interval with count starting after click
// }

// set interval value
// let interval = setInterval(run, 2500);

// write function that will increment index and change image
// on set interval
// function run() {
//   index++;
//   changeImage();
// }
