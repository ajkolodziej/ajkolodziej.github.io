function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geo Location not supported by browser");
  }
}

//function that retrieves the position
function showPosition(position) {
  var myPosition = document.getElementById("myPosition");
  var location = {
    longitude: position.coords.longitude,
    latitude: position.coords.latitude
  }
  console.log(location);
  alert(location);
  myPosition.textContent = location.longitude;
}
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('../service-worker.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
            
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}


getLocation();


