document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch a random quote
    function fetchRandomQuote() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                // Display the fetched quote and author
                const quoteElement = document.getElementById('quote');
                quoteElement.innerHTML = `<blockquote>${data.content}</blockquote><cite>${data.author}</cite>`;
            })
            .catch(error => console.error('Error fetching random quote:', error));
    }

    // Fetch a random quote
    fetchRandomQuote();

    // Fetch a new random quote
    const newQuoteButton = document.getElementById('new-quote');
    if (newQuoteButton) {
        newQuoteButton.addEventListener('click', fetchRandomQuote);
    }
});
// Update dark mode text and body
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const isDarkMode = body.classList.contains('dark-mode');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    if (isDarkMode) {
        body.classList.add('light-mode');
        darkModeToggle.textContent = '☀️';
    } else {
        body.classList.remove('light-mode');
        darkModeToggle.textContent = '🌙';
    }
}
//only executes when DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    //adds click event listeners
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    //current date in the footer
    function displayCurrentDate() {
        const currentDateElement = document.getElementById('current-date');
        const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        currentDateElement.textContent = currentDate;
    }

    // Show the current date
    displayCurrentDate();
});

document.addEventListener('DOMContentLoaded', function () {
    //initial coordinates and zoom level
    const initialCoordinates = [35.6895, 139.6917]; // Tokyo Coorindates
    const initialZoom = 5; 

    // Initialize the map
    const map = L.map('map').setView(initialCoordinates, initialZoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Different locations in Japan marked
    const locations = [
        { coordinates: [35.6895, 139.6917], name: 'Tokyo', description: 'Capital city of Japan' },
        { coordinates: [34.6937, 135.5022], name: 'Osaka', description: 'Famous for its modern architecture, nightlife, and street food' },
        { coordinates: [35.0116, 135.7681], name: 'Kyoto', description: 'Known for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses' },
        { coordinates: [35.6894, 139.6917], name: 'Shibuya Crossing', description: 'One of the busiest pedestrian crossings in the world located in Tokyo' },
        { coordinates: [35.7100, 139.8107], name: 'Shinjuku Gyoen National Garden', description: 'A large park and one of the most important gardens in Tokyo' },
        { coordinates: [34.3974, 132.4667], name: 'Miyajima', description: 'Home to the iconic "floating" Torii gate of Itsukushima Shrine' },
        { coordinates: [35.7126, 139.7806], name: 'Meiji Shrine', description: 'A Shinto shrine dedicated to the deified spirits of Emperor Meiji and Empress Shoken' },
        { coordinates: [34.8141, 135.7681], name: 'Kinkaku-ji (Golden Pavilion)', description: 'A Zen Buddhist temple in Kyoto covered in gold leaf' },
        { coordinates: [35.0169, 135.9908], name: 'Fushimi Inari Taisha', description: 'An important Shinto shrine in southern Kyoto, known for its thousands of torii gates' },
        { coordinates: [35.0116, 135.7681], name: 'Arashiyama Bamboo Grove', description: 'A natural bamboo forest in Kyoto, popular for its walking paths' },
    ];

    locations.forEach(location => {
        //Creates the markets and attaches information
        const marker = L.marker(location.coordinates).addTo(map);
        marker.bindPopup(`<b>${location.name}</b><br>${location.description}`).openPopup();
    });
});

