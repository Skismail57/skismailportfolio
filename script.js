// ===== Theme Toggle =====
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  updateThemeIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark ? 'dark' : 'light');
});

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector('i');
  if (theme === 'dark') {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

// ===== Mobile Menu Toggle =====
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
}

// ===== Navbar Scroll Color Change & Active Section Highlight =====
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  // Active Section Highlighting
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ===== Typing Effect for Hero Role =====
const roles = ["Web Developer", "Machine Learning Engineer", "Python Developer", "AI/ML Enthusiast"];
let index = 0;
let charIndex = 0;
let typingForward = true;
const element = document.querySelector(".animated-role");

function typeEffect() {
  if (!element) return;
  
  const current = roles[index];
  if (typingForward) {
    charIndex++;
    if (charIndex > current.length) {
      typingForward = false;
      setTimeout(typeEffect, 1500);
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
  setTimeout(typeEffect, typingForward ? 120 : 80);
}

// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
  if (element) {
    typeEffect();
  }
});

// ===== Animated Counter for Achievements =====
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  let current = 0;
  const duration = 2000; // 2 seconds
  const increment = target / (duration / 16); // 60fps

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.counter');
      counters.forEach(counter => {
        if (counter.textContent === '0') { // Only animate once
          animateCounter(counter);
        }
      });
    }
  });
}, { threshold: 0.5 });

const achievementsSection = document.getElementById('achievements');
if (achievementsSection) {
  counterObserver.observe(achievementsSection);
}

// ===== Scroll Animation (Fade & Slide) =====
const animatedElements = document.querySelectorAll("section, .skill-card, .project-box, .expertise-card, .gallery-item");

function checkScroll() {
  const triggerBottom = window.innerHeight * 0.8;
  animatedElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("fade-in", "visible");
    }
  });
}

window.addEventListener("scroll", checkScroll);
checkScroll();

// ===== Skills Animation =====
const skillCards = document.querySelectorAll(".skill-card");
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("fade-in", "visible");
      }, index * 100);
    }
  });
}, { threshold: 0.1 });

skillCards.forEach(card => skillObserver.observe(card));

// ===== Progress Bar Animation =====
const progressBars = document.querySelectorAll('.progress-fill');
const progressObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBar = entry.target;
      const width = progressBar.getAttribute('data-width');
      setTimeout(() => {
        progressBar.style.width = width;
      }, 500);
    }
  });
}, { threshold: 0.5 });

progressBars.forEach(bar => progressObserver.observe(bar));

// ===== Counter Animation for Percentages =====
const percentageElements = document.querySelectorAll('.percentage');
const percentageCounterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const percentage = entry.target;
      const targetValue = parseInt(percentage.textContent);
      let currentValue = 0;
      const increment = targetValue / 50;
      
      const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
          currentValue = targetValue;
          clearInterval(counter);
        }
        percentage.textContent = Math.floor(currentValue) + '%';
      }, 30);
    }
  });
}, { threshold: 0.5 });

percentageElements.forEach(element => {
  percentageCounterObserver.observe(element);
});

/* Qualification Tabs Toggle */
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".qualification-button");
  const contents = document.querySelectorAll(".qualification-content");

  // Set default active tab
  if (tabs.length > 0 && !document.querySelector('.qualification-button.qualification-active')) {
    tabs[0].classList.add("qualification-active");
    const firstTarget = tabs[0].dataset.target;
    if (firstTarget) {
      document.querySelector(firstTarget).classList.add("qualification-active");
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("qualification-active"));
      contents.forEach(c => c.classList.remove("qualification-active"));

      tab.classList.add("qualification-active");
      document.querySelector(tab.dataset.target).classList.add("qualification-active");
    });
  });
});

// ===== Gallery Scroll & Pagination =====
const scrollGallery = document.getElementById("scrollGallery");
const galleryTrack = document.getElementById("galleryTrack");
const paginationDots = document.getElementById("paginationDots");
const galleryItems = document.querySelectorAll(".gallery-item");

if (scrollGallery && galleryTrack && paginationDots && galleryItems.length > 0) {
  const itemWidth = 300;
  const itemsPerView = window.innerWidth > 768 ? 3 : window.innerWidth > 480 ? 2 : 1;
  const totalPages = Math.ceil(galleryItems.length / itemsPerView);
  let currentIndex = 0;

  function createDots() {
    paginationDots.innerHTML = '';
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        currentIndex = i;
        scrollToIndex(currentIndex);
        updateDots();
        restartAutoplay();
      });
      paginationDots.appendChild(dot);
    }
  }

  function scrollToIndex(index) {
    const scrollX = index * itemWidth * itemsPerView;
    scrollGallery.scrollTo({ left: scrollX, behavior: "smooth" });
  }

  function updateDots() {
    document.querySelectorAll(".dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIndex);
    });
  }

  function scrollGalleryByArrow(dir) {
    currentIndex += dir;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= totalPages) currentIndex = totalPages - 1;
    scrollToIndex(currentIndex);
    updateDots();
    restartAutoplay();
  }

  let autoplay = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalPages;
    scrollToIndex(currentIndex);
    updateDots();
  }, 4000);

  function restartAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalPages;
      scrollToIndex(currentIndex);
      updateDots();
    }, 4000);
  }

  // Pause autoplay on hover
  scrollGallery.addEventListener('mouseenter', () => clearInterval(autoplay));
  scrollGallery.addEventListener('mouseleave', restartAutoplay);

  createDots();
}

// ===== Smooth Scrolling for Navigation Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== Contact Form Handling =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const message = this.querySelector('textarea').value;
    
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    const submitBtn = this.querySelector('button');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      this.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// ===== Hide Loading Screen =====
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    // Wait a little longer for smoother transition
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
    }, 1000);
  }
  document.body.classList.add('loaded');
});

// ===== Back To Top Button =====
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===== Scroll Progress Bar =====
const scrollProgressBar = document.getElementById('scroll-progress-bar');

if (scrollProgressBar) {
  window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgressBar.style.width = scrollPercent + '%';
  });
}

// ===== PROJECT SEARCH =====
const projectSearch = document.getElementById('projectSearch');
const projectBoxes = document.querySelectorAll('.project-box');

if (projectSearch) {
  projectSearch.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    projectBoxes.forEach(box => {
      const projectTitle = box.querySelector('h3').textContent.toLowerCase();
      const projectDescription = box.querySelector('p') ? box.querySelector('p').textContent.toLowerCase() : '';
      if (projectTitle.includes(searchTerm) || projectDescription.includes(searchTerm)) {
        box.style.display = 'flex';
      } else {
        box.style.display = 'none';
      }
    });
  });
}

// ===== Parallax disabled to ensure background image visibility =====
// window.addEventListener('scroll', function() {
//   const scrolled = window.pageYOffset;
//   const hero = document.querySelector('.hero');
//   if (hero) {
//     const rate = scrolled * -0.5;
//     hero.style.transform = `translateY(${rate}px)`;
//   }
// });

// ===== Add Hover Effects to Cards =====
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.skill-card, .project-box, .expertise-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// ===== Add Ripple Effect to Buttons =====
function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add('ripple');

  const ripple = button.getElementsByClassName('ripple')[0];
  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

// Add ripple effect to all buttons
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('button, .about-btn, .projects-btn, .project-link');
  
  buttons.forEach(button => {
    button.addEventListener('click', createRipple);
  });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple 600ms linear;
    pointer-events: none;
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  button, .about-btn, .projects-btn, .project-link {
    position: relative;
    overflow: hidden;
  }
`;
document.head.appendChild(style);

// ===== Add Staggered Animation for Cards =====
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.skill-card, .expertise-card, .project-box');
  
  const cardObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    cardObserver.observe(card);
  });
});