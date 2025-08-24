document.addEventListener('DOMContentLoaded', () => {
            // --- MOBILE MENU ---
            const mobileMenuButton = document.querySelector('.mobile-menu-button');
            const nav = document.querySelector('.nav-menu');

            if(mobileMenuButton) {
                mobileMenuButton.addEventListener('click', () => {
                    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
                });
            }
            
            // --- FAQ ACCORDION ---
            const faqContainer = document.getElementById('faq-container');
            
            if (faqContainer) {
                faqContainer.addEventListener('click', (e) => {
                    const question = e.target.closest('.faq-question');
                    if (question) {
                        const item = question.parentElement;
                        const currentlyOpen = document.querySelector('.faq-item.open');
                        
                        if (currentlyOpen && currentlyOpen !== item) {
                            currentlyOpen.classList.remove('open');
                        }
                        
                        item.classList.toggle('open');
                    }
                });
            }

            // --- AI ASSISTANT MODAL ---
            const aiAssistantModal = document.getElementById('aiAssistantModal');
            const openAiAssistantBtn = document.getElementById('openAiAssistantBtn');
            const openAiAssistantBtnFab = document.getElementById('openAiAssistantBtnFab');
            const closeAiAssistantBtn = document.getElementById('closeAiAssistantModal');

            function openAiModal() {
                if(aiAssistantModal) aiAssistantModal.style.display = 'flex';
            }

            function closeAiModal() {
                if(aiAssistantModal) aiAssistantModal.style.display = 'none';
            }

            if(openAiAssistantBtn) openAiAssistantBtn.addEventListener('click', openAiModal);
            if(openAiAssistantBtnFab) openAiAssistantBtnFab.addEventListener('click', openAiModal);
            if(closeAiAssistantBtn) closeAiAssistantBtn.addEventListener('click', closeAiModal);
            
            if(aiAssistantModal) {
                aiAssistantModal.addEventListener('click', (e) => {
                    if (e.target === aiAssistantModal) {
                        closeAiModal();
                    }
                });
            }
        });