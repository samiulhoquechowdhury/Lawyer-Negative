document.addEventListener('DOMContentLoaded', () => {
    // --- USER DROPDOWN ---
    const userProfile = document.querySelector('.user-profile');
    const userDropdown = document.getElementById('userDropdown');

    userProfile.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        userDropdown.classList.remove('active');
    });

    // --- VIEW COMMENTS ---
    const commentLinks = document.querySelectorAll('.view-comments-link');
    commentLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const commentsSection = link.nextElementSibling;
            
            if (commentsSection.style.display === 'none' || commentsSection.style.display === '') {
                commentsSection.style.display = 'block';
                link.textContent = 'View less comments';
            } else {
                commentsSection.style.display = 'none';
                // This is a placeholder, you might want to restore the original comment count
                link.textContent = 'View all 25 comments'; 
            }
        });
    });

    // --- POST A TOPIC MODAL ---
    const postTopicModal = document.getElementById('postTopicModal');
    const openPostTopicBtns = document.querySelectorAll('.post-topic-btn-main');
    const closePostTopicBtn = document.getElementById('closePostTopicModal');

    openPostTopicBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            postTopicModal.style.display = 'flex';
        });
    });

    if(closePostTopicBtn) {
        closePostTopicBtn.addEventListener('click', () => {
            postTopicModal.style.display = 'none';
        });
    }


    // --- AI ASSISTANT MODAL ---
    const aiAssistantModal = document.getElementById('aiAssistantModal');
    const openAiAssistantBtn = document.getElementById('openAiAssistantBtn');
    const closeAiAssistantBtn = document.getElementById('closeAiAssistantModal');

    if(openAiAssistantBtn) {
        openAiAssistantBtn.addEventListener('click', () => {
            aiAssistantModal.style.display = 'flex';
        });
    }

    if(closeAiAssistantBtn) {
        closeAiAssistantBtn.addEventListener('click', () => {
            aiAssistantModal.style.display = 'none';
        });
    }


    // --- CLOSE MODALS ON OVERLAY CLICK ---
    [postTopicModal, aiAssistantModal].forEach(modal => {
        if(modal){
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    });
});
