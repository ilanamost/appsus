import { GoogleMapsApi } from './gmap.class.js';

var map;
var gMarker;

function initMap(lat = 32.0749831, lng = 34.9120554, zoom = 2) {
    const gmapApi = new GoogleMapsApi();
    return gmapApi.load().then(() => {
        map = new google.maps.Map(
            document.querySelector('#map'), {
                center: { lat, lng },
                zoom
            })
    });
}
function addMarker(loc, address, color="0000FF") {
    // var pinColor = "FE7569";
    // var pinColor = "0000FF";
    var pinColor = color;
    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));
    var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
        new google.maps.Size(40, 37),
        new google.maps.Point(0, 0),
        new google.maps.Point(12, 35));

    gMarker = new google.maps.Marker({
        position: loc,
        map: map,
        title: address,
        icon: pinImage
    });

//     var pinColor = "FE7569";
// var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
//     new google.maps.Size(21, 34),
//     new google.maps.Point(0,0),
//     new google.maps.Point(10, 34));
// var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
//     new google.maps.Size(40, 37),
//     new google.maps.Point(0, 0),
//     new google.maps.Point(12, 35));
// var marker = new google.maps.Marker({
//             position: new google.maps.LatLng(0,0), 
//             map: map,
//             icon: pinImage,
//             shadow: pinShadow
//         });
}

function setCenter(loc) {
    map.setCenter(loc)
}

function removeMarker() {
    gMarker.setMap(null);

}

export default {
    initMap,
    addMarker,
    setCenter,
    removeMarker
}