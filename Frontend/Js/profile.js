 // Form handling
        document.getElementById('profileForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Profile updated successfully!');
        });

        // Edit button functionality

        document.querySelector('.btn-edit').addEventListener('click', function() {
            const inputs = document.querySelectorAll('.form-input');
            inputs.forEach(input => {
                input.removeAttribute('readonly');
                input.style.backgroundColor = 'rgba(139, 92, 246, 0.2)';
            });
            alert('Edit mode enabled. You can now modify your profile.');
        });

        // Delete button functionality
        document.querySelector('.btn-delete').addEventListener('click', function() {
            if (confirm('Are you sure you want to delete your profile picture?')) {
                alert('Profile picture deleted.');
            }
        });

        // Cancel button functionality
        document.querySelector('.btn-cancel').addEventListener('click', function() {
            const inputs = document.querySelectorAll('.form-input');
            inputs.forEach(input => {
                input.setAttribute('readonly', true);
                input.style.backgroundColor = 'transparent';
            });
            // Reset values
            document.querySelector('input[type="text"]').value = 'Natalie Parker';
            document.querySelector('input[type="email"]').value = 'natalieparker@email.com';
            document.querySelector('input[type="tel"]').value = '+01 (158) 008-9987';
            alert('Changes cancelled.');
        });

        // Chat button functionality
        document.querySelector('.chat-button').addEventListener('click', function() {
            alert('Chat feature coming soon!');
        });

        // User menu functionality
        document.querySelector('.user-menu').addEventListener('click', function() {
            alert('User menu clicked!');
        });

        // Navigation functionality
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                alert(`Navigating to ${this.textContent}`);
            });
        });