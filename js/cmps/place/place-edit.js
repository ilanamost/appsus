import placeService from '../../services/place.service.js'
import mapService from '../../services/map.service.js'

export default {
    props: ['place'],
    created() {

    },
    computed: {
        dateStr() {
            return moment(this.place.sentAt).format("MMM Do YY")
        }
    },
    methods:{
        zoomIn(){
            mapService.initMap(this.place.lat, this.place.lng, 10)
            .then(()=>{
                var lat = this.place.lat;
                var lng = this.place.lng;
                var name = this.place.name;
                mapService.addMarker({lat, lng}, name);
            })
        },

   
    },

    template: `
    <section class="place-details" @click="zoomIn">
        <!-- <button type="button"><i class="fas fa-pencil-alt"></i></button> -->
        <input type="text" placeholder="place.name"/>
        <p>{{place.desc}}</p>
        <ul v-for="tag in place.tags">
            <li>{{tag}}</li>
        </ul>
        <p>{{place.lat}} , {{place.lng}}</p> 
        <img :src="place.imgUrl"/>
    </section>
    `
}