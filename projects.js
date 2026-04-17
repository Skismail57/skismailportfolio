// Projects Section Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Project filtering functionality
  const projectTabs = document.querySelectorAll('.projects-tab');
  const projectBoxes = document.querySelectorAll('.project-box');
  
  // Initialize projects with hidden state
  projectBoxes.forEach(box => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(50px)';
    box.style.transition = 'all 0.6s ease';
  });
  
  // Gagan-style project animations - continuous hover effects
  function initGaganStyleAnimations() {
    const visibleProjects = Array.from(projectBoxes).filter(box => 
      box.style.display !== 'none' && getComputedStyle(box).display !== 'none'
    );
    
    visibleProjects.forEach((project, index) => {
      // Initial state
      project.style.transform = 'translateY(0) scale(1)';
      project.style.opacity = '1';
      project.style.transition = 'all 0.3s ease';
      project.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
      
      // Add continuous subtle animation
      project.addEventListener('mouseenter', () => {
        project.style.transform = 'translateY(-10px) scale(1.02)';
        project.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
      });
      
      project.addEventListener('mouseleave', () => {
        project.style.transform = 'translateY(0) scale(1)';
        project.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
      });
      
      // Staggered entrance animation
      project.style.opacity = '0';
      project.style.transform = 'translateY(50px)';
      
      setTimeout(() => {
        project.style.opacity = '1';
        project.style.transform = 'translateY(0)';
      }, index * 150);
    });
  }
  
  // Initialize Gagan-style animations
  setTimeout(initGaganStyleAnimations, 500);
  
  // Animate projects one by one
  function animateProjectsSequentially() {
    const visibleProjects = Array.from(projectBoxes).filter(box => 
      box.style.display !== 'none' && getComputedStyle(box).display !== 'none'
    );
    
    visibleProjects.forEach((box, index) => {
      setTimeout(() => {
        box.style.opacity = '1';
        box.style.transform = 'translateY(0)';
        
        // Add alternating slide effects
        if (index % 2 === 0) {
          box.style.transform = 'translateX(-30px) translateY(0)';
          setTimeout(() => {
            box.style.transform = 'translateY(0)';
          }, 100);
        } else {
          box.style.transform = 'translateX(30px) translateY(0)';
          setTimeout(() => {
            box.style.transform = 'translateY(0)';
          }, 100);
        }
      }, index * 200); // 200ms delay between each project
    });
  }
  
  // Add click event to each tab
  projectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      projectTabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Get filter value
      const filterValue = tab.getAttribute('data-filter');
      
      // Filter projects
      projectBoxes.forEach(box => {
        // Reset animations
        box.style.opacity = '0';
        box.style.transform = 'translateY(50px)';
        
        if (filterValue === 'all' || box.getAttribute('data-category') === filterValue) {
          box.style.display = 'flex';
        } else {
          box.style.display = 'none';
        }
      });
      
      // Reset and re-animate projects after filtering
      projectBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(50px)';
      });
      setTimeout(() => {
        animateProjectsSequentially();
      }, 100);
    });
  });
  
  // Project hover effects
  projectBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      box.classList.add('hovered');
    });
    
    box.addEventListener('mouseleave', () => {
      box.classList.remove('hovered');
    });
  });
});