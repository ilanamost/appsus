import placeService from '../../services/place.service.js'
import placePreview from './place-preview.js';

export default {
    props: ['places'],
    template: `
        <section>
            <ul>
                <place-preview v-for="place in places" :place="place" 
                @delete="$emit('delete', place.id)"
                :key="place.id" @click.native="selectPlace(place.id)">
                </place-preview>
           </ul>
        </section>
    `,

    methods: {
        selectPlace(placeId) {
            this.$emit('selected', placeId);
        }
    },
    components: {
        placePreview
    }
}