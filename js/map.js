// map.js

// Initialize the map
const map = L.map('map').setView([51.3656, -2.5217], 13); // Coordinates for Lower Chew Valley area

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a simple marker for testing
L.marker([51.3656, -2.5217])
    .bindPopup('Lower Chew Valley')
    .addTo(map);