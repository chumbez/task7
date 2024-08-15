// Initialize the map centered on Villa Rosa Kempinski
var map = L.map('map').setView([-1.2645, 36.8082], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

var hotelMarker = L.marker([-1.2645, 36.8082]).addTo(map)
    .bindPopup('<b>Villa Rosa Kempinski</b><br>Welcome to our 5-star experience!');

// Data for different events
var villaRosaData = {
    "rooms": [
        {
            "name": "Deluxe Suite",
            "description": "A spacious suite with a beautiful ocean view.",
            "image": "path/to/deluxe-suite.jpg",
            "location": [-1.2645, 36.8082] // Adjust for actual positions
        }
    ],
    "dining": [
        {
            "name": "La Rosa Restaurant",
            "description": "Fine dining with a local twist.",
            "image": "path/to/restaurant.jpg",
            "location": [-1.2645, 36.8075]
        }
    ],
    "amenities": [
        {
            "name": "Spa Center",
            "description": "Relax and rejuvenate in our luxurious spa.",
            "image": "path/to/spa.jpg",
            "location": [-1.2645, 36.8090]
        }
    ]
    // Add more sections as needed
};

// Event Handlers
function showEventDetails(event) {
    map.setView(event.location, 17);
    var marker = L.marker(event.location).addTo(map)
        .bindPopup('<b>' + event.name + '</b><br>' + event.description + '<br><img src="' + event.image + '" width="100%">').openPopup();
}

document.getElementById('deluxe-suite').addEventListener('click', function() {
    showEventDetails(villaRosaData.rooms[0]);
});

document.getElementById('la-rosa-restaurant').addEventListener('click', function() {
    showEventDetails(villaRosaData.dining[0]);
});

document.getElementById('spa-center').addEventListener('click', function() {
    showEventDetails(villaRosaData.amenities[0]);
});
