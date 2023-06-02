// Create an array of colors
const colors = ['red', 'orange', 'yellow', 'green', 'blue'];

// Initialize global bounds for the map
let bounds = new google.maps.LatLngBounds();

// Initialize the map
const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: { lat: 0, lng: 0 }, // Will be updated when file is dropped
});

// Setup the drag and drop listener.
const dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('drop', handleFileSelect, false);
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('dragleave', handleDragLeave, false);

// ...existing code...

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    const files = evt.dataTransfer.files;
    for (let i = 0, f; f = files[i]; i++) {
        const reader = new FileReader();
        reader.onload = (function(theFile) {
            return function(e) {
                const gpx = (new DOMParser()).parseFromString(e.target.result, 'text/xml');
                const data = toGeoJSON.gpx(gpx); // Convert to GeoJSON
                const color = colors[i % colors.length];
                data.features.forEach((feature) => {
                    const path = feature.geometry.coordinates.map(coord => ({lat: coord[1], lng: coord[0]}));
                    path.forEach(coord => bounds.extend(coord)); // Update map bounds
                    const line = new google.maps.Polyline({
                        path,
                        geodesic: true,
                        strokeColor: color,
                        strokeOpacity: 1.0,
                        strokeWeight: 2,
                    });
                    line.setMap(map);
                });
                map.fitBounds(bounds); // Fit map to bounds

                // Create info table row
                const table = document.getElementById('info_table').getElementsByTagName('tbody')[0];
                const row = table.insertRow();
                const cellName = row.insertCell(0);
                const cellDate = row.insertCell(1);
                const cellStartPoint = row.insertCell(2);
                const cellDistance = row.insertCell(3);
                const cellColor = row.insertCell(4);

                // Populate info table row with data
                cellName.innerHTML = theFile.name;
                cellDate.innerHTML = theFile.lastModifiedDate.toISOString();
                cellStartPoint.innerHTML = `${data.features[0].geometry.coordinates[0][1]}, ${data.features[0].geometry.coordinates[0][0]}`;
                cellDistance.innerHTML = computeDistance(data.features[0].geometry.coordinates); // Compute distance
                cellColor.innerHTML = color;
                cellColor.style.color = color; // Change text color
            };
        })(f);
        reader.readAsText(f);
    }
}

// Function to calculate distance between coordinates
function computeDistance(coords) {
    let distance = 0;
    for(let i = 0; i < coords.length - 1; i++) {
        const start = new google.maps.LatLng(coords[i][1], coords[i][0]);
        const end = new google.maps.LatLng(coords[i+1][1], coords[i+1][0]);
        distance += google.maps.geometry.spherical.computeDistanceBetween(start, end);
    }
    return (distance * 0.000621371).toFixed(2); // Convert to miles and round to 2 decimal places
}

// ...existing code...


function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
    dropZone.style.backgroundColor = '#eee';
}

function handleDragLeave(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    dropZone.style.backgroundColor = '#fff';
}
