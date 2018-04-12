import locService from '../../services/loc.service.js'
import mapService from '../../services/map.service.js'
import utilService from '../../services/util.service.js'


export default {
    data() {
        return {
            gCoords: {},
            gMarkerExist: false
        }
    },
    created() {
        locService.getLocs()
            .then(locs => console.log('locs', locs))

        window.onload = () => {
            mapService.initMap()
                .then(
                    () => {
                        var lat = utilService.getParameterByName('lat');
                        var lng = utilService.getParameterByName('lng');

                        if (lat && lng) {
                            setPosByCoords(+lat, +lng);
                        } else {
                            setCurrPos();
                        }
                    }
                );
        }


        function setPositionByCoords(lat, lng) {
            reverseGeocoding(lat, lng)
                .then(function (address) {
                    setMarker(lat, lng, address);
                    // renderService.renderAddress(address);
                    // getWeather(lat, lng);
                })
                .catch(err => {
                    console.log('err!!!', err);
                })
        }

        function setCurrPos() {
            locService.getPosition()
                .then(pos => {
                    // console.log('User position is:', pos.coords);
                    reverseGeocoding(pos.coords.latitude, pos.coords.longitude)
                        .then(function (address) {
                            setMarker(pos.coords.latitude, pos.coords.longitude, address);
                            // renderService.renderAddress(address);
                            // getWeather(pos.coords.latitude, pos.coords.longitude);
                        })
                        .catch(err => {
                            console.log('err!!!', err);
                        })
                })
                .catch(err => {
                    console.log('err!!!', err);
                })
        }

        function reverseGeocoding(lat, lng) {
            let key = LOCATION_KEY;
        
            return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`)
                .then(function (res) {
                    // console.log('data', res.data);
                    var address = res.data.results[0].formatted_address;
                    return address;
                })
                .catch(err => {
                    console.log('err!!!', err);
                })
        }

        function setMarker(lat, lng, address) {
            if (gMarkerExists) mapService.removeMarker();
            mapService.addMarker({ lat, lng }, address);
            mapService.setCenter({ lat, lng });
            gCoords.lat = lat;
            gCoords.lng = lng;
            gMarkerExists = true;
        }
        
                
    },

    template: `
                <div class="map">
                    <h1>map</h1>
                    <div id="map" style="width: 96%; height: 450px;"></div>
                <div>
    `
}