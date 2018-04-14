import placeService from '../../services/place.service.js'
import mapService from '../../services/map.service.js'

export default {
    props: ['place', 'filterBy'],

    data() {
        return {
            placeToEdit: null
        }
    },

    methods: {
        savePlace() {
            if(this.setPlaceToEdit.id) this.$emit('goToDetails');

            // console.log(this.place);
            placeService.savePlace(this.placeToEdit)
                .then(() => {
                    console.log('Saved!');
                    this.$emit('placeSaved');
                })
        },
        zoomIn() {
            var lat = this.placeToEdit.lat;
            var lng = this.placeToEdit.lng;
            var name = this.placeToEdit.name;
            this.setMarker(lat, lng, name);
        },
        setMarker(lat, lng, name){
            var TEMP_PIN_COLOR = "FFA500";
            mapService.removeMarker();
            mapService.addMarker({ lat, lng }, name, TEMP_PIN_COLOR);
            mapService.setZoom(2);
        }
    },

    created() {
        if (this.place === null) {
            this.placeToEdit = { name: '', desc: '', tags: [], imgUrls: [], lat: 0, lng: 0 };

            if (this.filterBy !== null) {
                this.placeToEdit.name = this.filterBy.name;

                placeService.geocoding(this.filterBy.name).then(function (coords) {
                    var lat = coords.lat;
                    var lng = coords.lng;
                    return coords;
                }).then((coords) => {
                    this.placeToEdit.lat = coords.lat;
                    this.placeToEdit.lng = coords.lng;
                    this.zoomIn();
                });
            }
            
        } else {
            this.placeToEdit = this.place;
        }

        // console.log(' this.placeToEdit',  this.placeToEdit); 
    },
    computed: {
        setPlaceToEdit() {
            if (this.place === null) {
                this.placeToEdit = { name: '', desc: '', tags: [], imgUrl: [], lat: 0, lng: 0 };
    
                if (this.filterBy && this.filterBy.name) {
                    this.placeToEdit.name = this.filterBy.name;
    
                    placeService.geocoding(this.filterBy.name).then(function (coords) {
                        var lat = coords.lat;
                        var lng = coords.lng;
                        return coords;
                    }).then((coords) => {
                        this.placeToEdit.lat = coords.lat;
                        this.placeToEdit.lng = coords.lng;
                        this.zoomIn();
                    });
                }
                
            } else {
                this.placeToEdit = this.place;
            }

            return this.placeToEdit;
        },

        
     },

    template: `
    <section class="place-details">
        <input type="text" v-model="setPlaceToEdit.name"/>
        </br>
        <input type="text" v-model="setPlaceToEdit.desc"/>
        </br>

        <select v-model="setPlaceToEdit.tags" @change.prevent="" multiple="multiple" >
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
        <!-- <div v-for="imgUrl in setPlaceToEdit.imgUrls">
           <img :src="imgUrl"/>
        </div> -->
        <img v-for="imgUrl in setPlaceToEdit.imgUrls" :src="imgUrl"/>
        </br>
        <p> lat: {{setPlaceToEdit.lat}} , lng: {{setPlaceToEdit.lng}}</p>
        <button type="button" @click="savePlace" >{{(setPlaceToEdit.id)? 'Save': 'Add'}}</button>
        <!-- <button type="submit"> {{(car.id)? 'Save': 'Add'}}</button> -->
    </section>
    `
}