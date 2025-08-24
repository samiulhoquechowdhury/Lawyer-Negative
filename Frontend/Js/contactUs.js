document.addEventListener('DOMContentLoaded', () => {
    // --- USER DROPDOWN ---
    const userProfile = document.querySelector('.user-profile');
    const userDropdown = document.getElementById('userDropdown');

    if (userProfile) {
        userProfile.addEventListener('click', (e) => {
            e.stopPropagation();
            userDropdown.classList.toggle('active');
        });
    }

    document.addEventListener('click', () => {
        if (userDropdown && userDropdown.classList.contains('active')) {
            userDropdown.classList.remove('active');
        }
    });

    // --- FLOATING ACTION BUTTON ---
    const fab = document.querySelector('.floating-action-btn');
    if (fab) {
        fab.addEventListener('click', () => {
            // Placeholder for AI chat functionality
            alert('AI Assistant clicked!');
        });
    }

    // --- FORM SUBMISSION ---
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent!');
            contactForm.reset();
        });
    }
});
