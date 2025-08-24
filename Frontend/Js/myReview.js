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

    // --- RENDER REVIEWS DYNAMICALLY ---
    const reviewsGrid = document.querySelector('.reviews-grid');

    function renderReviews() {
        if (!reviewsGrid) return;
        reviewsGrid.innerHTML = ''; // Clear existing cards

        // This assumes myReviewsData is available from assets.js
        if (typeof myReviewsData !== 'undefined') {
            myReviewsData.forEach(review => {
                const reviewCard = document.createElement('div');
                reviewCard.className = 'review-card';
                reviewCard.innerHTML = `
                    <div class="card-header">
                        <div class="lawyer-info">
                            <img src="${review.avatarUrl}" alt="${review.lawyerName}">
                            <div>
                                <h3>${review.lawyerName}</h3>
                                <p>${review.location}</p>
                                <button class="play-btn"><i class="fas fa-play"></i> Play</button>
                            </div>
                        </div>
                        <div class="rating-icon">${review.ratingEmoji}</div>
                    </div>
                    <div class="card-body">
                        <p class="batch-no">Batch No: ${review.batchNo} <button class="translate-btn">Translate</button></p>
                        <p class="review-text">${review.reviewText} <a href="#">see more</a></p>
                    </div>
                    <div class="card-footer">
                        <span class="grievances">Grievances: ${review.grievances}</span>
                    </div>
                `;
                reviewsGrid.appendChild(reviewCard);
            });
        }
    }

    renderReviews();

    // --- AI ASSISTANT MODAL ---
    const aiAssistantModal = document.getElementById('aiAssistantModal');
    const openAiAssistantBtn = document.querySelector('.floating-action-btn');
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
});