# JavascriptWebsite

<h1> Hey this is a javascript website that tells you a bit about me and why I want to code</h1>
This website was made using vanilla javascript, html and css.
<h1>Features of website</h1>
*Dark mode and light mode
*Random quote of the day
*navigation bar that directs you to different parts of the page
*Map that indicates popular tourist areas in japan
*Displays current date

<h1>Favourites</h1>
document.addEventListener('DOMContentLoaded', function () {
    //initial coordinates and zoom level
    const initialCoordinates = [35.6895, 139.6917]; // Tokyo Coorindates
    const initialZoom = 5; 

    // Initialize the map
    const map = L.map('map').setView(initialCoordinates, initialZoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

This function is one of my favourities, it holds the geographical coorindates of the map.
I then use the leaflet library and its methods to set the view i want, which in this case is japan. I choose openstreetmap has my tile layer provider, I didn't really know what tiles were
before and learning how different tile sets are cached and used for different zoom levels to 
increase speed was interesting.
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
Having a dark mode on a website has been a staple so actually adding it to mine was exciting.
In this code im essentialy referencing the <body> element of the html file and changing 
the assigned css with body.classList.add.

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
This was my first time using an API with javascript, fetch('https://api.quotable.io/random') starts a GET request. I then handle the response of the server (response => response.json().
I select the HTML element with the ID "quote" and update the contents of the selected HTML element with the fetched data.

