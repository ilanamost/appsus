import placeService from '../../services/place.service.js'
import mapService from '../../services/map.service.js'

export default {
    props: ['place'],
    // created() {
    //     const placeId  = +this.$route.params.placeId;
    //     if (placeId) {
    //         placeService.getById(placeId)
    //         .then(place => {
    //             this.place = place
    //         })
    //     }
    // },
    // computed: {
    //     dateStr() {
    //         return moment(this.place.sentAt).format("MMM Do YY")
    //     }
    // },
    methods: {
        zoomIn() {
            mapService.initMap(this.place.lat, this.place.lng, 10)
                .then(() => {
                    var lat = this.place.lat;
                    var lng = this.place.lng;
                    var name = this.place.name;
                    mapService.addMarker({ lat, lng }, name);
                })
        },
        savePlace() {
            console.log(this.place);
            placeService.savePlace(this.place)
            .then(()=>{
                console.log('Saved!');
                // this.$router.push('/place');
            })
        }
    },

    template: `
    <section class="place-details" @click="zoomIn">
        <input type="text" v-model="place.name"/>
        </br>
        <input type="text" v-model="place.desc"/>
        </br>
        <!-- <ul v-for="tag in place.tags">
            <li>{{tag}}</li>
        </ul> -->

        <select v-model="place.tags" @change.prevent="" multiple="multiple" >
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
        </br>
        <img :src="place.imgUrl"/>
        </br>
        <p> lat: {{place.lat}} , lng: {{place.lng}}</p>
        <button type="button" @click="savePlace">{{(place.id)? 'Save': 'Add'}}</button>
        <!-- <button type="submit"> {{(car.id)? 'Save': 'Add'}}</button> -->
    </section>
    `
}