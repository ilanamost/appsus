import placeService from '../../services/place.service.js'
import mapService from '../../services/map.service.js'

export default {
    props: ['place'],

    methods: {
        savePlace() {
            console.log(this.place);
            placeService.savePlace(this.place)
                .then(() => {
                    console.log('Saved!');
                    // this.$router.push('/place');
                })
        }
    },

    template: `
    <section class="place-details">
        <input type="text" v-model="place.name"/>
        </br>
        <input type="text" v-model="place.desc"/>
        </br>

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