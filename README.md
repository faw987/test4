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
<a href="faw4.html">faw4</a>
<br/>

<a href="faw5.html">faw5</a>
<br/>

<a href="faw6.html">faw6 - drag & drop </a>
<br/>

<a href="faw9.html">faw9</a>
<br/>

<a href="faw10.html">faw10</a>
<br/>

<a href="faw13.html">faw13</a>
<br/>

<a href="clemap1.png">cle</a>
<br/>

<a href="sunset-on-river.jpg">sunset</a>
<br/>

<h1>Good Day 1.5.1  :) </h1>
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
