import placeService from '../../services/place.service.js'
import mapService from '../../services/map.service.js'

export default {
    props: ['place'],
    template: `
            <section>
                <li @click="zoomIn">{{place.name}}</li>
                <button @click.stop="$emit('delete')" title="Delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </section>
    `,
    computed:{
     
    },
    methods:{
        // zoomIn(){
            // mapService.initMap(this.place.lat, this.place.lng, 10)
            // .then(()=>{
            //     var lat = this.place.lat;
            //     var lng = this.place.lng;
            //     var name = this.place.name;
            //     mapService.addMarker({lat, lng}, name);
            // })
        // }

        zoomIn() {
            var lat = this.place.lat;
            var lng = this.place.lng;
            var name = this.place.name;
            this.setMarker(lat, lng, name);
        },
        setMarker(lat, lng, name){
            mapService.removeMarker({ lat, lng });
            mapService.addMarker({ lat, lng }, name);
            mapService.setCenter({ lat, lng });
            mapService.setZoom(10);
        }
    }
}