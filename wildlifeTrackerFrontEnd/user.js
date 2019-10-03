// document.addEventListener('DOMContentLoaded', () => {
    
//     addAnimalButton.addEventListener('click', event => {
//         const animalToAdd = event.target.parentNode
//         console.log(event)
//         fetch(addAnimalsURL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             }, 
//             body: JSON.stringify(
//                 {
//                     user_id: 1, 
//                     animal_id: animal.id
//                 }
//             )
//         }).then()
//     })
    
// })  
// document.addEventListener('DOMContentLoaded', () => {

// var map

// })


var map;
function initMap() {
    // googleMap = document.createElement('div')
    // googleMap.className = 'map'
  map = new google.maps.Map(document.getElementById('googleMap'),{
    center: {lat: 40.0519752, lng: -76.314270999999}, // lat/long of center of map
    zoom: 15, // 8 or 9 is typical zoom 
    scrollwheel:  false, // prevent mouse scroll from zooming map. 
    mapTypeControl: true, //default
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.BOTTOM_CENTER
    },
    zoomControl: true, //default
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    streetViewControl: true, //default
    streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
    }, 
    fullscreenControl: true
  });
//   document.body.append(map)
}



