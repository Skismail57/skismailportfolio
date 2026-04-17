// ===== Skills Section Animation and Functionality =====

document.addEventListener('DOMContentLoaded', function() {
  // Skill progress animation
  const skillCards = document.querySelectorAll('.skill-card');
  
  // Add animation when skill cards come into view
  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        entry.target.classList.add('visible');
        
        // Add a slight delay between each card animation
        const index = Array.from(skillCards).indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * 0.1}s`;
      }
    });
  }, { threshold: 0.2 });
  
  // Observe each skill card
  skillCards.forEach(card => {
    skillObserver.observe(card);
  });
  
  // Add hover effects
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
  });
  
  // Expertise section animation
  const expertiseCards = document.querySelectorAll('.expertise-card');
  
  const expertiseObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        entry.target.classList.add('visible');
        
        // Add a slight delay between each card animation
        const index = Array.from(expertiseCards).indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * 0.1}s`;
      }
    });
  }, { threshold: 0.2 });
  
  // Observe each expertise card
  expertiseCards.forEach(card => {
    expertiseObserver.observe(card);
  });
});