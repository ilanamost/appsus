import placeService from '../../services/place.service.js'
import mapService from '../../services/map.service.js'

export default {
    props: ['place'],
    created() {

    },
    computed: {
        // dateStr() {
        //     return moment(this.place.sentAt).format("MMM Do YY")
        // }
    },
    methods: {
        emitOnEdit() {
            this.$emit('switchToEdit');
        }
    },

    template: `
    <section class="place-details" @click="emitOnEdit();">
        <div class="message">
            <p class="email-subject message-header">{{place.name}}
                <button type="button" @click="emitOnEdit();">
                   <i class="fas fa-pencil-alt"></i>
                </button>
            </p>
                
            <div class="message-body">
                <div class="block">
                    <div class="columns">
                        <div class="column is-8">
                            <p>{{place.desc}}</p>
                            <ul v-for="tag in place.tags">
                                <li class="tag" :class="{'is-light': tag === 'Children', 'is-warning': tag === 'Fun', 'is-success': tag === 'Food', 'is-danger': tag === 'Romantic', 'is-dark': tag === 'Music', 'is-link': tag === 'Dance', 'is-black': tag === 'Extrim', 'is-primary': tag === 'Family'}">{{tag}}</li>
                            </ul>
                        </div>
                        <div class="column is-4">
                           <img v-for="imgUrl in place.imgUrls" :src="imgUrl"/>
                            <p><i class="fas fa-map-marker"></i>  &nbsp; {{place.lat}} , {{place.lng}}</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </section>
    `
}

