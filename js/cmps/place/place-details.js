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
        emitOnEdit(){
            this.$emit('switchToEdit');
        }
    },

    template: `
    <section class="place-details">
        <button type="button" @click="emitOnEdit();"><i class="fas fa-pencil-alt"></i></button>
        <p>{{place.name}}</p>
        <p>{{place.desc}}</p>
        <ul v-for="tag in place.tags">
            <li>{{tag}}</li>
        </ul>
        <img :src="place.imgUrl"/>
        <p>{{place.lat}} , {{place.lng}}</p> 
        <!-- <i class="fas fa-map-marker"></i> -->
    </section>
    `
}