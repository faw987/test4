<!DOCTYPE html>
<html>
<head>
<title>general launch point</title> 
<style>
/*body {*/
/*  background-image: url('images/sunset-on-river.jpg');*/
/*}*/


a {
text-decoration: none; /* Remove underline */
color: #000; /* Default text color */
font-weight: bold; /* Make text bold */
padding: 10px 15px; /* Add padding inside the box */
border: 2px solid #000; /* Add a border */
border-radius: 5px; /* Optional: Add rounded corners */
display: inline-block; /* Make the link a block element */
transition: background-color 0.3s, color 0.3s; /* Add transition for smooth effect */
}

/* Hover and focus states */
a:hover, a:focus {
background-color: #000; /* Change background color on hover */
color: #fff; /* Change text color on hover */
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
<h2> 11/16/2023 12:41 - V0.97 </h2>
<br/>


<a href="f53.html">360 degrees experiment (new)</a>
<br/>
<br/>
<a href="faw39.html">PT Coach experiment</a>
<br/>
<br/>
<a href="f43.html">Enhanced Supercharger search</a>
<br/>
<br/>
<a href="f54.html">Timer</a>
<br/>
<br/>
<a href="f55.html">Dec23 GPS gpt4all Mistral Instruct</a>
<br/>
<br/>

<br/>
<a href="http://www.wunderground.com">weather</a><br/>
<br/>


<br/>
<a href="faw56.html">weather2</a><br/>
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
