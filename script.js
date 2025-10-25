// Create soft twinkling stars
const starsContainer = document.querySelector('.stars');
const starCount = 80;

for (let i = 0; i < starCount; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  const size = Math.random() * 2 + 1 + 'px';
  const x = Math.random() * 100 + '%';
  const y = Math.random() * 100 + '%';
  const delay = Math.random() * 5 + 's';
  const duration = Math.random() * 3 + 2 + 's';
  
  star.style.width = size;
  star.style.height = size;
  star.style.left = x;
  star.style.top = y;
  star.style.animationDelay = delay;
  star.style.animationDuration = duration;
  
  starsContainer.appendChild(star);
}
