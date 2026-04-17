// Home arrow navigation button
document.addEventListener('DOMContentLoaded', function() {
    // Create home arrow button
    const homeArrow = document.createElement('div');
    homeArrow.className = 'home-arrow';
    homeArrow.innerHTML = '↑';
    homeArrow.title = 'Back to Home';
    
    // Add to body
    document.body.appendChild(homeArrow);
    
    // Show/hide based on scroll position and current section
    function updateHomeArrow() {
        const homeSection = document.getElementById('home');
        const currentSection = getCurrentSection();
        
        // Show arrow when not on home section and scrolled down
        if (currentSection !== 'home' && window.scrollY > 100) {
            homeArrow.classList.add('visible');
        } else {
            homeArrow.classList.remove('visible');
        }
    }
    
    // Get current section based on scroll position
    function getCurrentSection() {
        const sections = ['home', 'about', 'qualification', 'skills', 'experties', 'projects', 'gallery', 'contact'];
        
        for (let section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    return section;
                }
            }
        }
        return 'home';
    }
    
    // Click handler - scroll to home
    homeArrow.addEventListener('click', function() {
        document.getElementById('home').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Update on scroll
    window.addEventListener('scroll', updateHomeArrow);
    
    // Initial check
    updateHomeArrow();
});
