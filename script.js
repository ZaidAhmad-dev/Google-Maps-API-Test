// Declaring InitMap Fucntion
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 30.1575, lng: 71.5249 },
      zoom: 8,
    });

//     //  Adding Marker to the map
// var marker = new google.maps.Marker({
//     position: { lat: 30.1575, lng: 71.5249 },
//     map: map,
//     icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
//     title: 'Hello World!'
//   });

//   // Adding info window to the marker
//   var infowindow = new google.maps.InfoWindow({
//     content: 'Multan',
//     maxWidth: 200
//   });
//   // Adding Event Listener to the marker to open infowindow
//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.open(map, marker);
//   });

    // addMarker(30.1575, 71.5249, "Multan", "Multan");

    // Calling addMarker by declaring an array and passing in the function
    var markers = [
      { lat: 30.1575, lng: 71.5249, title: "Multan", content: "Multan" },
      { lat: 35.1575, lng: 71.5249, title: "Mumbai", content: "Mumbai" },
      { lat: 330.1575, lng: 71.5249, title: "Delhi", content: "Delhi" },
      { lat: 365.1575, lng: 71.5249, title: "Bangalore", content: "Bangalore" },
      { lat: 30.1575, lng: 71.5249, title: "Chennai", content: "Chennai" },
      { lat: 30.1575, lng: 71.5249, title: "Kolkata", content: "Kolkata" },
      { lat: 30.1575, lng: 71.5249, title: "Hyderabad", content: "Hyderabad" },
      { lat: 30.1575, lng: 71.5249, title: "Pune", content: "Pune" },
      { lat: 30.1575, lng: 71.5249, title: "Chandigarh", content: "Chandigarh" },
      { lat: 30.1575, lng: 71.5249, title: "Chennai", content: "Chennai" },
      { lat: 30.1575, lng: 71.5249, title: "Kolkata", content: "Kolkata" },
      { lat: 30.1575, lng: 71.5249, title: "Hyderabad", content: "Hyderabad" },
      { lat: 30.1575, lng: 71.5249, title: "Pune", content: "Pune" },
      { lat: 30.1575, lng: 71.5249, title: "Chandigarh", content: "Chandigarh" },
      { lat: 30.1575, lng: 71.5249, title: "Chennai", content: "Chennai" },
    ];
    // Adding loop to the array to pass to addMarker function lat, lng, title, content parameters
    for (var i = 0; i < markers.length; i++){
        addMarker(markers[i].lat, markers[i].lng, markers[i].title, markers[i].content);
    }

    // Adding Markers to the map dynamically using function
    function addMarker(lat, lng, title, content) {
        var marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            title: title
        });

        var infowindow = new google.maps.InfoWindow({
            content: content,
            maxWidth: 200
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    }

    // Listening for click on a map and adding icon to the marker to that position
    google.maps.event.addListener(map, 'click', function(event) {
        var marker = new google.maps.Marker({
            position: event.latLng,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            title: "Hello World!"
        });
    });
}  
