function initMap() {
    // Create a map object and center it at (0,0)
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: { lat: 0, lng: 0 },
    });

    // Read the file from the URL
    // fetch("file:///Users/frankwallace/Downloads/lat_lon.txt")
    //     .then((response) => response.text())
    //     .then((data) => {
    //         // Split the data into lines

    data = "40.56675452000867, -74.44067575904914,   place1\n"
    data += "40.566, -74.440, place2\n"
    data += "40.5665, -74.4405, place3"
            var lines = data.split("\n");

    var lastLatLng = null;

            // Loop through the lines and plot their latitudes and longitudes
            for (var i = 0; i < lines.length; i++) {
                var latLng = lines[i].split(",");
                var lat = parseFloat(latLng[0]);
                var lng = parseFloat(latLng[1]);
                var label = latLng[2];

                if (!isNaN(lat) && !isNaN(lng)) {
                    var marker = new google.maps.Marker({
                        position: { lat: lat, lng: lng },
                        label: label,
                        map: map,
                    });
                    lastLatLng = { lat: lat, lng: lng };
                    console.log(lastLatLng);
                }
            }
            // Zoom the map to the last marker
            if (lastLatLng != null) {
                map.setZoom(15);
                map.setCenter(lastLatLng);
            }
        // });
}

function initDrop() {
    var dropZone = document.getElementById('drop_zone');
    dropZone.addEventListener('drop', handleFileDrop, false);

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: { lat: 0, lng: 0 },
    });

}

function handleFileDrop(event) {
    event.stopPropagation();
    event.preventDefault();

    var file = event.dataTransfer.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        var fileContent = event.target.result;
        console.log(fileContent)
        processFileContent(fileContent);
    };

    reader.readAsText(file);
}


function dropHandler(ev) {
    console.log("Drop");
    ev.preventDefault();
    const data = ev.dataTransfer.items;
    for (let i = 0; i < data.length; i += 1) {
        console.log(data[i]);
        if ((data[i].kind === 'string') &&
            (data[i].type.match('^text/plain'))) {
            // This item is the target node
            console.log("… string/plain:");
            // data[i].getAsString((s) => {
            //     ev.target.appendChild(document.getElementById(s));
            // });
        } else if ((data[i].kind === 'string') &&
            (data[i].type.match('^text/html'))) {
            // Drag data item is HTML
            console.log("… Drop: HTML");
        } else if ((data[i].kind === 'string') &&
            (data[i].type.match('^text/uri-list'))) {
            // Drag data item is URI
            console.log("… Drop: URI");
        } else if ((data[i].kind === 'file') &&
            (data[i].type.match('^image/'))) {
            // Drag data item is an image file
            const f = data[i].getAsFile();
            console.log("… Drop: File ");
        } else if ((data[i].kind === 'file') &&
            (data[i].type.match('^text/plain'))) {
            // Drag data item is an image file
            const f = data[i].getAsFile();
            console.log("… Drop: File "+f);
            // f.open("r");
            // while (!f.eof) {
            //     // read each line of text
            //     str += f.readln() + "\n";
            // }
            // const fileContent =  f.text();
            // console.log("… Drop: File "+fileContent);

            // (async () => {
            //         const fileContent = await f.text();
            //         console.log('.text()', fileContent);
            //     }
            // )


            var reader = new FileReader();

            // Add the onload event listener
            reader.onload = function() {
                var res = reader.result;
                console.log("log1",res); // Display the contents of the file on the console
                processFileContent(res);

            };

            // Read the file as text
            var x = reader.readAsText(f);
            // console.log('Error: The dropped file is not a text file');
            console.log("log2",x);
            // processFileContent(x);
        }

    }
}

function dragOverHandler(ev) {
    console.log('File(s) in drop zone');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}




function processFileContent(content) {
    var markers = [];
    var minLat = Infinity;
    var maxLat = -Infinity;
    var minLng = Infinity;
    var maxLng = -Infinity;

    console.log("content",content);

    // Parse the file content and extract the latitude, longitude, and label for each line.
    // Add a marker for each line.
    // Calculate the min and max latitude and longitude.
    var lines = content.trim().split('\n');
    // var lines = content.split('\n');
    for (var i = 0; i < lines.length; i++) {
        console.log('log3 lines[i]:',lines[i])
        var parts = lines[i].trim().split(',');
        var lat = parseFloat(parts[0]);
        var lng = parseFloat(parts[1]);
        var label = parts[2];
        markers.push({lat: lat, lng: lng, label: label});

        if (lat < minLat) {
            minLat = lat;
        }
        if (lat > maxLat) {
            maxLat = lat;
        }
        if (lng < minLng) {
            minLng = lng;
        }
        if (lng > maxLng) {
            maxLng = lng;
        }
    }

    var centerLat = (minLat + maxLat) / 2;
    var centerLng = (minLng + maxLng) / 2;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {lat: centerLat, lng: centerLng}
    });

    // Add the markers to the map.
    for (var i = 0; i < markers.length; i++) {
        var marker = markers[i];
        var label = marker.label;
        var latLng = {lat: marker.lat, lng: marker.lng};
        console.log('label,latlng:',label,latLng);
        new google.maps.Marker({
            position: latLng,
            map: map,
            title: label
        });
    }

    // Set the zoom level to fit all markers.
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++) {
        var marker = markers[i];
        var label = marker.label;
        var latLng = {lat: marker.lat, lng: marker.lng};
        console.log('label,latlng:',label,latLng);
        // console.log('kkkkkkkk',markers[i]);
        bounds.extend(latLng);
    }
    map.fitBounds(bounds);
}

