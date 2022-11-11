<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
     integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
     crossorigin=""/>
 
<!-- Make sure you put this AFTER Leaflet's CSS -->
<script src="https://unpkg.com/leaflet@1.9.2/dist/leaflet.js"
     integrity="sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg="
     crossorigin=""></script>

#map { height: 180px; }     

<div id="map"></div>

     
<div id="text"></div>
<div id=two">
<h1>hhh1</h1>
</div>
 
<script>
document.getElementById("text").innerHTML = "Text added by JavaScript code";
var map = L.map('map').setView([51.505, -0.09], 13);
</script>
 
