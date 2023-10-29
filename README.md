<!DOCTYPE html>
<html>
<head>
<title>general launch point</title> 
<style>
/*body {*/
/*  background-image: url('images/sunset-on-river.jpg');*/
/*}*/

a {
            font-size: 16pt;
            font-family: Arial, sans-serif;
            color: black;
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
<h2> 10/29/2023 07:50 - V0.955 </h2>
<br/>


<a href="f53.html">360 degrees experiment (new)</a>
<br/>
<a href="faw39.html">PT Coach experiment</a>
<br/>
<a href="f43.html">Enhanced Supercharger search</a>
<br/>
<br/>
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


<a href="faw34.html">NEW streetview experiment</a>
<br><br>


<a href="faw35.html">gpx streetview experiment</a>
<br><br>

<a href="faw35a.html">gpxa streetview experiment fixed</a>
<br><br>

<a href="faw36.html">gps/motion experiment</a>
<br><br>


<a href="faw37.html">new gps/motion experiment</a>
<br><br>


<a href="faw38.html">sheets experiment</a>
<br><br>


<a href="f44.html">Enhanced Supercharger search</a>
<br><br>

<a href="f45.html">shake experiment</a>
<br><br>


<a href="f46.html">send</a>
<br><br>

<a href="f47.html">retrieve</a>
<br><br>


<a href="f48.html">send bearing</a>
<br><br>


<a href="f49.html">try websocket</a>
<br><br>



<a href="f50.html">SpeechSynthesisUtterance experiment</a>
<br><br>



<a href="f50.html">SpeechSynthesisUtterance experiment</a>
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
