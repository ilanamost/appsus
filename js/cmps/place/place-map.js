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
                this.places.forEach(({lat, lng}) => {
                    console.log(lat)
                    mapService.addMarker({lat, lng})
                });

            })
    },

    template: `
                <div class="map"> 
                    <div id="map" style="width: 96%; height: 450px;"></div>
               </div>
    `
}