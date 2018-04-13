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
        <input type="text" v-model="place.name"/>
        <input type="text" v-model="place.desc"/>
        <!-- <ul v-for="tag in place.tags">
            <li>{{tag}}</li>
        </ul> -->

        <select v-model="selected" @change="emitFilter" multiple="multiple">
                    <option class="tag is-warning" value="Fun">Fun</option>  
                    <option class="tag is-success" value="Food">Food</option>  
                    <option class="tag is-danger" value="Romantic">Romantic</option>  
                    <option class="tag is-dark" value="Music">Music</option>  
                    <option class="tag is-link" value="Dance">Dance</option>  
                    <option class="tag is-black" value="Extrim">Extrim</option>  
                    <option class="tag is-primary" value="Family">Family</option>  
                    <option class="tag is-light" value="Children">Children</option>  
        </select>
        <p> lat: {{place.lat}} , lng: {{place.lng}}</p> 
        <img :src="place.imgUrl"/>
    </section>
    `
}