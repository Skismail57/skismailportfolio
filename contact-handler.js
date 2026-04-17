// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const messageDiv = document.getElementById('formMessage');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };
        
        // Show loading
        messageDiv.innerHTML = '<p style="color: #0a66c2;">Sending message...</p>';
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (result.success) {
                messageDiv.innerHTML = '<p style="color: white; font-weight: bold;">Message sent successfully! Thank you for contacting me.</p>';
                form.reset();
            } else {
                messageDiv.innerHTML = '<p style="color: #dc3545;">Failed to send message. Please try again.</p>';
            }
        } catch (error) {
            messageDiv.innerHTML = '<p style="color: #dc3545;">Error sending message. Please try again later.</p>';
        }
    });
});
