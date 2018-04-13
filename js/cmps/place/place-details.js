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
        emitOnEdit() {
            this.$emit('switchToEdit');
        }
    },

    template: `
    <section class="place-details" @click="zoomIn(); emitOnEdit();">
        <div class="message">
            <p class="email-subject message-header">{{place.name}}<button type="button" @click="emitOnEdit();"><i class="fas fa-pencil-alt"></i></button></p>
                
            <div class="message-body">
                <div class="block">
                    <div class="columns">
                        <div class="column is-8">
                            <p>{{place.desc}}</p>
                            <ul v-for="tag in place.tags">
                                <li class="tag">{{tag}}</li>
                            </ul>
                        </div>
                        <div class="column is-4">
                            <img :src="place.imgUrl"/>
                            <p><i class="fas fa-map-marker"></i>  &nbsp {{place.lat}} , {{place.lng}}</p> 
                        </div>
                    </div>
                </div>
            </div>

        </div>    
    </section>
    `
}

// :class="{tag is-light: place.tag= 'Children', tag is-warning: place.tag= 'fun', tag is-success: place.tag= 'Food', tag is-danger: place.tag= 'Romantic', tag is-dark: place.tag= 'Music', tag is-link: place.tag= 'Dance', tag is-black: place.tag= 'Extrim', tag is-primary: place.tag= 'Family'}"