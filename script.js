// Get all listing cards
const listingCards = document.querySelectorAll('.listing-card');

// Add click event listeners to each card
listingCards.forEach(card => {
    card.addEventListener('click', () => {
        // Simulate loading the individual listing HTML page
        window.location.href = 'listing1.html'; // Replace with the actual URL
    });
});
