// Simple Gallery Auto-Slider
document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('galleryTrack');
    const items = document.querySelectorAll('.gallery-item');
    const dots = document.getElementById('galleryDots');
    
    let current = 0;
    const total = items.length;
    
    // Create dots
    dots.innerHTML = '';
    for(let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.className = 'gallery-dot';
        if(i === 0) dot.classList.add('active');
        dots.appendChild(dot);
    }
    
    // Update display
    function updateGallery() {
        const slideWidth = 300; // 280px + 20px gap
        track.style.transform = `translateX(-${current * slideWidth}px)`;
        
        // Update dots
        document.querySelectorAll('.gallery-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === current);
        });
    }
    
    // Auto-play
    setInterval(() => {
        current = (current + 1) % total;
        updateGallery();
    }, 2000);
    
    // Initialize
    updateGallery();
});
