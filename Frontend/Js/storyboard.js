document.addEventListener('DOMContentLoaded', () => {
    // --- USER DROPDOWN ---
    const userProfile = document.querySelector('.user-profile');
    const userDropdown = document.getElementById('userDropdown');

    userProfile.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        if (userDropdown.classList.contains('active')) {
            userDropdown.classList.remove('active');
        }
    });

    // --- VIEW COMMENTS ---
    const commentLinks = document.querySelectorAll('.view-comments-link');
    commentLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const storyCard = e.target.closest('.story-card');
            const commentsSection = storyCard.querySelector('.comments-section');
            
            if (commentsSection.style.display === 'none' || commentsSection.style.display === '') {
                commentsSection.style.display = 'block';
                link.innerHTML = '<i class="fas fa-comment"></i> View less comments';
            } else {
                commentsSection.style.display = 'none';
                link.innerHTML = '<i class="fas fa-comment"></i> View all 25 comments'; 
            }
        });
    });

    // --- POST A STORY MODAL ---
    const postStoryModal = document.getElementById('postStoryModal');
    const openPostStoryBtns = document.querySelectorAll('.post-story-btn');
    const closePostStoryBtn = document.getElementById('closePostStoryModal');

    openPostStoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            postStoryModal.style.display = 'flex';
        });
    });

    if(closePostStoryBtn) {
        closePostStoryBtn.addEventListener('click', () => {
            postStoryModal.style.display = 'none';
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
    [postStoryModal, aiAssistantModal].forEach(modal => {
        if(modal){
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    });
});
