import placeService from '../../services/place.service.js'
import mapService from '../../services/map.service.js'

export default {
    props: ['place'],
    template: `
            <section class="place-preview">
                <ul class="email form-check">
                <li @click="zoomIn">{{place.name}} <button class="delete is-small" @click.stop="$emit('delete')" title="Delete"></button></li>
                    
                </ul>    
            </section>
    `,
    computed:{
     
    },
    methods:{
        zoomIn() {
            var lat = this.place.lat;
            var lng = this.place.lng;
            var name = this.place.name;
            this.setMarker(lat, lng, name);
        },
        setMarker(lat, lng, name){
            mapService.removeMarker();
            mapService.addMarker({ lat, lng }, name);
            mapService.setCenter({ lat, lng });
            mapService.setZoom(10);
        }
    }
}