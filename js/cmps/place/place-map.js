import locService from '../../services/loc.service.js'
import mapService from '../../services/map.service.js'
import utilService from '../../services/util.service.js'


export default {
    props: ['places'],
    data() {
        return {
            gCoords: {},
            gMarkerExist: false
        }
    },
    mounted() {
        mapService.initMap()
            .then(()=>{
                // console.log('map',map);
                
                this.places.forEach(({lat, lng, name}) => {
                    mapService.addMarker({lat, lng}, name);
                });

            })
    },

    template: `
                <div class="map"> 
                    <div id="map" style="width: 98%; height: 450px;"></div>
                </div>
    `
}