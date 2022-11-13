<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
     integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
     crossorigin=""/>

<!-- Make sure you put this AFTER Leaflet's CSS -->
<script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
     integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
     crossorigin=""></script>

<div id="map" style="width: 600px; height: 400px;"></div>

<div id="text"></div>
<div id=two">
<h1>hhh 7:00</h1>
<a href="faw4.html">faw4</a>
</div>
 
<script>
document.getElementById("text").innerHTML = "Text added by JavaScript code";
<!-- alert("one"); 41.500998037771, -81.68048052414491. -->
var map = L.map('map').setView([41.500998037771, -81.68048052414491], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

</script>
 
