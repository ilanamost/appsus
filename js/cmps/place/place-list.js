import placeService from '../../services/place.service.js'
import mapService from '../../services/map.service.js'
import placePreview from './place-preview.js';

export default {
    props: ['places'],
    template: `
        <section class="map-list">
            <div class="block">
                <div class="notification is-info is-small">
                    <ul>
                        <place-preview v-for="place in places" :place="place" 
                        @delete="$emit('delete', place.id)"
                        :key="place.id" @click.native="selectPlace(place.id)">
                        </place-preview>
                    </ul>
                </div>   
            </div>
        </section>
    `,

    methods: {
        selectPlace(placeId) {
            this.$emit('selected', placeId);
        },

   
    },
    components: {
        placePreview
    }
}