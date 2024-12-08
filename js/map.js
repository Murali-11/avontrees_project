// map.js

// Initialize the map
const map = L.map('map').setView([51.3656, -2.5217], 13);

// Add OpenStreetMap as the base layer
const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Initialize layer groups
const landcoverLayer = L.layerGroup();
const satelliteLayer = L.layerGroup();

// Set up sidebar controls
document.getElementById('info-button').addEventListener('click', function() {
    this.classList.add('active');
    document.getElementById('layers-button').classList.remove('active');
    document.getElementById('info-content').classList.remove('hidden');
    document.getElementById('layers-content').classList.add('hidden');
});

document.getElementById('layers-button').addEventListener('click', function() {
    this.classList.add('active');
    document.getElementById('info-button').classList.remove('active');
    document.getElementById('layers-content').classList.remove('hidden');
    document.getElementById('info-content').classList.add('hidden');
});

// Handle layer selection
document.getElementById('baseLayer').addEventListener('change', function(e) {
    // Clear all layers
    map.removeLayer(landcoverLayer);
    map.removeLayer(satelliteLayer);

    // Add selected layer
    switch(e.target.value) {
        case 'landcover':
            landcoverLayer.addTo(map);
            break;
        case 'satellite':
            satelliteLayer.addTo(map);
            break;
    }
});