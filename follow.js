const sliderThumb = document.querySelector('.slider-thumb'); // this links this code to the html code that has "slider-thumb as its variable" 
let targetX = 0; 
let targetY = 0;
let currentX = 0;
let currentY = 0; //this sets the variable to x and y axis of 0

document.addEventListener('mousemove', (event) => {
  targetX = event.clientX;
  targetY = event.clientY;
}); // this allows the slider to move with the response of mouse movement

function updatePosition() { // constantly updates the value of the initial x and y axis code
  const dx = targetX - currentX;
  const dy = targetY - currentY;
  const vx = dx * 0.005; // Adjust this value for speed
  const vy = dy * 0.005; // Adjust this value for speed
  currentX += vx;
  currentY += vy;

  sliderThumb.style.setProperty('--x', `${currentX}px`);
  sliderThumb.style.setProperty('--y', `${currentY}px`);

  requestAnimationFrame(updatePosition); // this allows the slider to move with the response of mouse movement and with an animation
}

updatePosition();
