// Project view tracking for analytics
document.addEventListener('DOMContentLoaded', function() {
    // Track project views
    const projectBoxes = document.querySelectorAll('.project-box');
    
    projectBoxes.forEach((project, index) => {
        // Add click tracking
        project.addEventListener('click', () => {
            trackProjectView(`project-${index + 1}`);
        });
        
        // Add intersection observer for view tracking
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Track when project comes into view
                    trackProjectView(`project-${index + 1}-view`);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(project);
    });
    
    // Track resume downloads
    const resumeButtons = document.querySelectorAll('.resume-btn');
    resumeButtons.forEach(button => {
        button.addEventListener('click', () => {
            trackResumeDownload();
        });
    });
});

async function trackProjectView(projectId) {
    try {
        await fetch(`/api/project-view/${projectId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error tracking project view:', error);
    }
}

async function trackResumeDownload() {
    try {
        await fetch('/api/resume-download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Error tracking resume download:', error);
    }
}
