// Circular Progress Indicator - Gagan Style
document.addEventListener('DOMContentLoaded', function() {
    const progressCircle = document.querySelector('.progress-circle');
    const progressBar = document.querySelector('.progress-bar');
    const percentageText = document.querySelector('.percentage');
    
    if (!progressCircle || !progressBar || !percentageText) return;
    
    let currentProgress = 0;
    let targetProgress = 0;
    let animationId;
    
    // Calculate scroll progress from home to contact section
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollableHeight = documentHeight - windowHeight;
        
        // Calculate progress from 0% at top to 100% at bottom
        const scrollProgress = Math.min(Math.max(scrollTop / scrollableHeight, 0), 1);
        targetProgress = Math.round(scrollProgress * 100);
        
        if (!animationId) {
            animateProgress();
        }
    }
    
    // Animate progress smoothly
    function animateProgress() {
        const diff = targetProgress - currentProgress;
        
        if (Math.abs(diff) > 0.5) {
            currentProgress += diff * 0.1;
            
            // Update percentage text
            percentageText.textContent = Math.round(currentProgress);
            
            // Update circular progress bar
            const circumference = 2 * Math.PI * 32; // radius = 32
            const offset = circumference - (currentProgress / 100) * circumference;
            progressBar.style.strokeDashoffset = offset;
            
            animationId = requestAnimationFrame(animateProgress);
        } else {
            currentProgress = targetProgress;
            percentageText.textContent = currentProgress;
            
            const circumference = 2 * Math.PI * 32;
            const offset = circumference - (currentProgress / 100) * circumference;
            progressBar.style.strokeDashoffset = offset;
            
            animationId = null;
        }
    }
    
    // Scroll to top when clicked
    progressCircle.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show progress indicator on all pages - always visible like Gagan's site
    function toggleVisibility() {
        // Always show the progress indicator on all sections
        progressCircle.style.opacity = '1';
        progressCircle.style.visibility = 'visible';
        progressCircle.style.transform = 'scale(1)';
    }
    
    // Initial setup - ensure it's always visible
    progressCircle.style.transition = 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease';
    progressCircle.style.opacity = '1';
    progressCircle.style.visibility = 'visible';
    progressCircle.style.transform = 'scale(1)';
    
    // Event listeners
    window.addEventListener('scroll', function() {
        updateScrollProgress();
        toggleVisibility();
    });
    
    // Initial call
    updateScrollProgress();
    toggleVisibility();
    
    // Add hover effect
    progressCircle.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    progressCircle.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
