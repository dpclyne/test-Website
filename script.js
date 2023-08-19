document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON data (simulated as a local file)
    fetch("listings.json")
        .then(response => response.json())
        .then(data => {
            // Generate listing cards based on the JSON data
            const listingsContainer = document.querySelector(".listings");

            data.forEach(listing => {
                const card = document.createElement("div");
                card.classList.add("listing-card");
                card.innerHTML = `
                    <img src="${listing.thumbnail}" alt="${listing.title}">
                    <h2>${listing.title}</h2>
                    <p class="location">${listing.location}</p>
                    <p class="price">${listing.price}</p>
                `;

                // Add a click event listener to simulate loading individual listing pages
                card.addEventListener("click", () => {
                    // Simulate loading the individual listing HTML page
                    window.location.href = `listing${listing.id}.html`;
                });

                listingsContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error loading JSON data:", error);
        });
});
