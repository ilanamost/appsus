import placeService from '../../services/place.service.js'
import mapService from '../../services/map.service.js'

export default {
    props: ['place', 'filterBy'],

    data() {
        return {
            placeToEdit: null,
            imgUrl: ''
        }
    },

    methods: {
        savePlace() {
            if (this.setPlaceToEdit.id) this.$emit('goToDetails');

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
        setMarker(lat, lng, name) {
            var TEMP_PIN_COLOR = "FFA500";
            mapService.removeMarker();
            mapService.addMarker({ lat, lng }, name, TEMP_PIN_COLOR);
            mapService.setZoom(2);
        },
        addImgFunc() {
            this.placeToEdit.imgUrls.push(this.imgUrl);
        },
        deleteImg(imgUrl) {
            this.placeToEdit = placeService.deleteImgLocaly(this.placeToEdit.id, imgUrl);
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
                this.placeToEdit = { name: '', desc: '', tags: [], imgUrls: [], lat: 0, lng: 0 };

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
        <div class="message">
            <input class="message-header" type="text" v-model="setPlaceToEdit.name"/>
            <div class="message-body">
                    <div class="block">
                        <div class="columns">
                            <div class="column is-8">
                                <textarea class="textarea" maxlength="40" size="60" type="text" v-model="setPlaceToEdit.desc"></textarea>
                                <select class="tags" v-model="setPlaceToEdit.tags" @change.prevent="" multiple="multiple" >
                                    <option class="tag is-warning" value="Fun">Fun</option>  
                                    <option class="tag is-success" value="Food">Food</option>  
                                    <option class="tag is-danger" value="Romantic">Romantic</option>  
                                    <option class="tag is-dark" value="Music">Music</option>  
                                    <option class="tag is-link" value="Dance">Dance</option>  
                                    <option class="tag is-black" value="Extrim">Extrim</option>  
                                    <option class="tag is-primary" value="Family">Family</option>  
                                    <option class="tag is-light" value="Children">Children</option>  
                                </select>

                                <!-- <select>
                                    <option value="" disabled selected>Select your option</option>
                                    <option value="hurr">Durr</option>
                                </select> -->
                            </div>
                            <div class="column is-4">
                                <!-- <img :src="setPlaceToEdit.imgUrl"/> -->
                                <img v-for="imgUrl in setPlaceToEdit.imgUrls" :src="imgUrl"/>
                                <button v-for="(imgUrl, index) in setPlaceToEdit.imgUrls" class="fa clear-btn base-btn pointer close-window" @click="deleteImg(setPlaceToEdit.imgUrls[index])"></button>
                                <p><i class="fas fa-map-marker"></i>  &nbsp  lat: {{setPlaceToEdit.lat}} , lng: {{setPlaceToEdit.lng}}</p>
                                <div class="edit-BTNs">
                                    <button class="edit-BTN button is-info is-small" type="button" @click="savePlace">{{(setPlaceToEdit.id)? 'Save': 'Add'}}</button>
                                    <!-- MOVE CLOSE BTN TO HERE INSTEAD THIS LINE--><button class="edit-BTN button is-info is-small" type="button" @click="savePlace">{{(setPlaceToEdit.id)? 'Save': 'Add'}}</button>
                                    
                                </div>    
                            </div>
                        </div>
                    </div>
            </div>
            <!-- <button type="submit"> {{(car.id)? 'Save': 'Add'}}</button> -->
        </div> 
    </section>
    `
}