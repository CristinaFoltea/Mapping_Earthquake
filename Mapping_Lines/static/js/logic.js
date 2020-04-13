
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40, -111], 5);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.satellite',
	accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "yellow"
}).addTo(map);

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line2 = [
  [37.6213, -122.3790],
  [30.2672, -97.7431],
  [43.6777, -79.6248],
  [40.6413, -73.7781],
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line2, {
  color: "blue",
  dashArray: '10'
}).addTo(map);