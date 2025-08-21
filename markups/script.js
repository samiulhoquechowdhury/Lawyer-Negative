const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// Function to update active card
function updateActiveCard() {
  cards.forEach((card, idx) => {
    card.classList.toggle("active", idx === currentIndex);
  });
}

// Button navigation
nextBtn.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    carousel.scrollBy({ left: 300, behavior: "smooth" });
    updateActiveCard();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    carousel.scrollBy({ left: -300, behavior: "smooth" });
    updateActiveCard();
  }
});

// Drag to scroll
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  carousel.classList.add("dragging");
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => {
  isDown = false;
  carousel.classList.remove("dragging");
});

carousel.addEventListener("mouseup", () => {
  isDown = false;
  carousel.classList.remove("dragging");
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 2;
  carousel.scrollLeft = scrollLeft - walk;
});

// Initialize first active card
updateActiveCard();
