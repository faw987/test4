<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-image: url('images/sunset-on-river.jpg');
}
</style>
</head>
<body>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
     integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
     crossorigin=""/>

<!-- Make sure you put this AFTER Leaflet's CSS -->
<script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
     integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
     crossorigin=""></script>

<div id="map" style="width: 600px; height: 400px;"></div>

<div id="text"></div>

<br/>
<a href="faw4.html">faw4 location and camera</a>
<br/>

<a href="faw5.html">faw5</a>

<br/>
<a href="faw6.html">faw6 - drag & drop </a>
<br/>
<a href="faw7.html">faw7</a>

<br/>

<a href="faw8.html">faw8</a>
<br><br>
<a href="faw9.html">faw9</a>
<br><br>
<a href="faw11.html">faw11 - draw lines</a>
<br><br>
<a href="faw12.html">faw12 - broke</a>
<br><br>
<a href="faw10.html">Chippy</a>
<br>
<a href="faw13.html">Chippy One</a>
<br>
<a href="faw14.html">Chippy Two - six pics - working on Xmas theme</a>
<br>
<a href="faw31.html">Latitude & Longitude</a>
<br><br>
<a href="faw32.html">Multi-ride mapper</a>
<br><br>

<a href="faw33.html">streetview experiment</a>
<br><br>


<a href="clemap1.png">cle</a>
<br>

<a href="sunset-on-river.jpg">sunset</a>

<br><br>
<h1>Ahoy there.</h1>
 
<br/>
<script>

document.getElementById("text").innerHTML = "Text added by JavaScript code";
<!-- alert("one"); 41.500998037771, -81.68048052414491. -->
var map = L.map('map').setView([41.500998037771, -81.68048052414491], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

</script>
 
</body>
