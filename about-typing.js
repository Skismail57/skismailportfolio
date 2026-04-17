// About section typing effect for multiple roles
document.addEventListener('DOMContentLoaded', function() {
    const aboutRoles = ["Machine Learning Engineer", "Full Stack Developer", "SQL Developer"];
    let aboutIndex = 0;
    let aboutCharIndex = 0;
    let aboutTypingForward = true;
    const aboutElement = document.querySelector("#about .animated-role");

    function aboutTypeEffect() {
        if (!aboutElement) return;
        
        const current = aboutRoles[aboutIndex];
        if (aboutTypingForward) {
            aboutCharIndex++;
            if (aboutCharIndex > current.length) {
                aboutTypingForward = false;
                setTimeout(aboutTypeEffect, 2000); // Pause at end
                return;
            }
        } else {
            aboutCharIndex--;
            if (aboutCharIndex === 0) {
                aboutTypingForward = true;
                aboutIndex = (aboutIndex + 1) % aboutRoles.length;
            }
        }
        aboutElement.textContent = current.substring(0, aboutCharIndex);
        setTimeout(aboutTypeEffect, aboutTypingForward ? 100 : 60);
    }

    // Start about typing effect when about section comes into view
    const aboutObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && aboutElement) {
                aboutTypeEffect();
                aboutObserver.unobserve(entry.target); // Only run once
            }
        });
    }, { threshold: 0.5 });

    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }
});
