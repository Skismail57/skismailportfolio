function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}
const roles = ["Machine Learning Engineer", "Python and SQL Developer"];
let index = 0;
let charIndex = 0;
let typingForward = true;
const element = document.querySelector(".animated-role");

function typeEffect() {
  const current = roles[index];
  if (typingForward) {
    charIndex++;
    if (charIndex > current.length) {
      typingForward = false;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      typingForward = true;
      index = (index + 1) % roles.length;
    }
  }

  element.textContent = current.substring(0, charIndex);
  setTimeout(typeEffect, typingForward ? 100 : 60);
}

typeEffect();

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}