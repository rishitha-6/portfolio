// Typing Effect
const text = "Hello, I'm Rishitha";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;

// Scroll Reveal Animation
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', () => {
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;
    if (boxTop < triggerPoint) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
});

// Smooth Scroll (optional backup in case browser doesn't support pure CSS)
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
