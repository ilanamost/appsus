import locService from '../../services/loc.service.js'
import mapService from '../../services/map.service.js'


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
                        var lat = getParameterByName('lat');
                        var lng = getParameterByName('lng');

                        if (lat && lng) {
                            setPosByCoords(+lat, +lng);
                        } else {
                            setCurrPos();
                        }
                    }
                );

        }
    }


}