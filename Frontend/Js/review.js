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

    // --- MODAL CONTROLS ---
    const reviewModal = document.getElementById('reviewModal');
    const translateModal = document.getElementById('translateModal');
    const attorneyGrid = document.querySelector('.attorney-grid');

    window.writeReview = () => reviewModal.style.display = 'flex';
    window.closeReviewModal = () => reviewModal.style.display = 'none';
    window.openTranslateModal = () => translateModal.style.display = 'flex';
    window.closeTranslateModal = () => translateModal.style.display = 'none';

    [reviewModal, translateModal].forEach(modal => {
        if(modal) {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    });

    // --- RENDER ATTORNEY CARDS (Placeholder data) ---
    const attorneyData = [
        { name: 'Samantha Wheeler', location: 'New York City, NY', stars: 4.5, ratingEmoji: '😊', barNumber: 'USI-M44000', description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium...', grievances: 20, reviewer: 'Client A', avatarUrl: 'https://placehold.co/64x64/E9D5FF/1A103C?text=SW' },
        { name: 'David Persie', location: 'New York City, NY', stars: 4.2, ratingEmoji: '😊', barNumber: 'USI-M44001', description: 'A different description for David to test the functionality properly.', grievances: 2, reviewer: 'Client B', avatarUrl: 'https://placehold.co/64x64/E9D5FF/1A103C?text=DP' },
        { name: 'Natalie Parker', location: 'New York City, NY', stars: 4.8, ratingEmoji: '😍', barNumber: 'USI-M44002', description: 'Natalie was excellent, highly recommend her services to anyone in need of legal help.', grievances: 0, reviewer: 'Client C', avatarUrl: 'https://placehold.co/64x64/E9D5FF/1A103C?text=NP' }
    ];

    function renderAttorneys(filters = {}) {
        if (!attorneyGrid) return;
        attorneyGrid.innerHTML = ''; 

        const filteredData = attorneyData.filter(attorney => {
            const nameMatch = filters.name ? attorney.name.toLowerCase().includes(filters.name.toLowerCase()) : true;
            const barMatch = filters.bar ? attorney.barNumber.toLowerCase().includes(filters.bar.toLowerCase()) : true;
            const cityMatch = filters.city ? attorney.location.toLowerCase().includes(filters.city.toLowerCase()) : true;
            return nameMatch && barMatch && cityMatch;
        });

        if (filteredData.length === 0) {
            attorneyGrid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: #94a3b8;">No attorneys found matching your search.</p>`;
            return;
        }

        filteredData.forEach(attorney => {
            const cardHTML = `
                <div class="attorney-card">
                    <div class="rating">${attorney.ratingEmoji}</div>
                    <div class="attorney-header">
                        <div class="attorney-avatar" style="background-image: url('${attorney.avatarUrl}');"></div>
                        <div class="attorney-info">
                            <h3>${attorney.name}</h3>
                            <div class="attorney-location">📍 ${attorney.location}</div>
                            <div style="color: #10b981; font-size: 14px;">⭐ ${attorney.stars}</div>
                        </div>
                    </div>
                    <div class="attorney-details">
                        <div class="batch-number">
                            Batch No ${attorney.barNumber}
                            <button class="translate-btn" data-translated="false">🌐 Translate</button>
                        </div>
                        <p class="attorney-description" data-original-text="${attorney.description}">
                            ${attorney.description}
                            <a href="#" class="see-more">see more</a>
                        </p>
                    </div>
                    <div class="attorney-footer">
                        <span class="grievances">Grievances ${attorney.grievances}</span>
                        <span style="color: #94a3b8; font-size: 12px;">~ ${attorney.reviewer}</span>
                    </div>
                </div>
            `;
            attorneyGrid.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    // --- SEARCH LOGIC ---
    window.searchAttorneys = (event) => {
        event.preventDefault();
        const filters = {
            name: document.getElementById('search-name').value,
            bar: document.getElementById('search-bar').value,
            city: document.getElementById('search-city').value,
            state: document.getElementById('search-state').value,
        };
        renderAttorneys(filters);
    };
    
    // --- TRANSLATE LOGIC ---
    let targetDescriptionElement = null;
    let currentTranslateButton = null;

    if (attorneyGrid) {
        attorneyGrid.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('translate-btn')) {
                targetDescriptionElement = target.closest('.attorney-details').querySelector('.attorney-description');
                currentTranslateButton = target;

                if (target.dataset.translated === "true") {
                    targetDescriptionElement.innerHTML = `${targetDescriptionElement.dataset.originalText} <a href="#" class="see-more">see more</a>`;
                    target.dataset.translated = "false";
                    target.innerHTML = '🌐 Translate';
                } else {
                    openTranslateModal();
                }
            }
        });
    }

    const translateForm = document.getElementById('translateForm');
    if (translateForm) {
        translateForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const selectedLanguage = event.target.querySelector('input[name="language"]:checked').value;
            if (targetDescriptionElement && currentTranslateButton) {
                const originalText = targetDescriptionElement.dataset.originalText;
                const translatedText = `[Translated to ${selectedLanguage}]: "${originalText}"`; 
                targetDescriptionElement.innerHTML = `${translatedText} <a href="#" class="see-more">see more</a>`;
                
                currentTranslateButton.dataset.translated = "true";
                currentTranslateButton.innerHTML = '↩️ Revert to English';
            }
            closeTranslateModal();
        });
    }
    
    // --- FLOATING LABEL ---
    document.querySelectorAll('.floating-input').forEach(input => {
        input.addEventListener('input', () => {
            if (input.value) {
                input.classList.add('has-value');
            } else {
                input.classList.remove('has-value');
            }
        });
    });

    // --- FORM SUBMISSION & RATING ---
    window.submitReview = (event) => {
        event.preventDefault();
        console.log('Review submitted!');
        closeReviewModal();
    };

    window.selectRating = (el) => {
        document.querySelectorAll('.rating-option').forEach(opt => opt.classList.remove('selected'));
        el.classList.add('selected');
    };

    // --- AI ASSISTANT MODAL ---
    const aiAssistantModal = document.getElementById('aiAssistantModal');
    const openAiAssistantBtn = document.getElementById('openAiAssistantBtn');
    const closeAiAssistantBtn = document.getElementById('closeAiAssistantModal');

    function openAiModal() {
        if(aiAssistantModal) aiAssistantModal.style.display = 'flex';
    }

    function closeAiModal() {
        if(aiAssistantModal) aiAssistantModal.style.display = 'none';
    }

    if(openAiAssistantBtn) openAiAssistantBtn.addEventListener('click', openAiModal);
    if(closeAiAssistantBtn) closeAiAssistantBtn.addEventListener('click', closeAiModal);
    
    if(aiAssistantModal) {
        aiAssistantModal.addEventListener('click', (e) => {
            if (e.target === aiAssistantModal) {
                closeAiModal();
            }
        });
    }

    // --- INITIAL PAGE LOAD ---
    renderAttorneys();
});