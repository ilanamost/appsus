import placeService from '../../services/place.service.js'
import mapService from '../../services/map.service.js'

export default {
    props: ['place'],

    data(){
        return {
            placeToEdit: null
        }
    },

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

    created(){
            if (this.place === null) {
                this.placeToEdit = {name:'', desc: '', tags: [], imgUrl: ''};
                // console.log('this.place', this.place);
            } else{
                this.placeToEdit = this.place;
            }
    },

    template: `
    <section class="place-details">
        <input type="text" v-model="placeToEdit.name"/>
        </br>
        <input type="text" v-model="placeToEdit.desc"/>
        </br>

        <select v-model="placeToEdit.tags" @change.prevent="" multiple="multiple" >
                    <option class="tag is-warning" value="Fun">Fun</option>  
                    <option class="tag is-success" value="Food">Food</option>  
                    <option class="tag is-danger" value="Romantic">Romantic</option>  
                    <option class="tag is-dark" value="Music">Music</option>  
                    <option class="tag is-link" value="Dance">Dance</option>  
                    <option class="tag is-black" value="Extrim">Extrim</option>  
                    <option class="tag is-primary" value="Family">Family</option>  
                    <option class="tag is-light" value="Children">Children</option>  
        </select>
        </br>
        <img :src="placeToEdit.imgUrl"/>
        </br>
        <p> lat: {{placeToEdit.lat}} , lng: {{placeToEdit.lng}}</p>
        <button type="button" @click="savePlace">{{(placeToEdit.id)? 'Save': 'Add'}}</button>
        <!-- <button type="submit"> {{(car.id)? 'Save': 'Add'}}</button> -->
    </section>
    `
}