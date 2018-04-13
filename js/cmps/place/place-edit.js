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
                    <option value="Fun">Fun</option>  
                    <option value="Food">Food</option>  
                    <option value="Work">Work</option>  
                    <option value="Romantic">Romantic</option>  
                    <option value="Music">Music</option>  
                    <option value="Dance">Dance</option>  
                    <option value="Extrim">Extrim</option>  
                    <option value="Family">Family</option>  
                    <option value="Children">Children</option>  
        </select>
        <p> lat: {{place.lat}} , lng: {{place.lng}}</p> 
        <img :src="place.imgUrl"/>
    </section>
    `
}