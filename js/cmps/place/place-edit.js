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

    created(){
            if (this.place === null) {
                // debugger;
                // console.log('this.place', this.place);
                this.place = new Object();
                // this.place.name = 'enter place';
                // this.place.desc = 'enter desc';
                // this.place.tags = [];
                console.log('this.place', this.place);
            }
    },

    computed: {
        // setPlace(){
        //     if(this.place === null){
        //         debugger;
        //         // console.log('this.place', this.place);

        //         this.place.name = 'enter place';
        //         this.place.desc = 'enter desc';
        //         this.place.tags = [];
        //         console.log('this.place', this.place);
        //     }
        // }
    },

    template: `
    <section class="place-details">
        <input type="text" v-model="place.name"/>
        </br>
        <input type="text" v-model="place.desc"/>
        </br>

        <select v-model="place.tags" @change.prevent="" multiple="multiple" >
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
        <img :src="place.imgUrl"/>
        </br>
        <p> lat: {{place.lat}} , lng: {{place.lng}}</p>
        <button type="button" @click="savePlace">{{(place.id)? 'Save': 'Add'}}</button>
        <!-- <button type="submit"> {{(car.id)? 'Save': 'Add'}}</button> -->
    </section>
    `
}