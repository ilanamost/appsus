import placeService from '../../services/place.service.js'
import placePreview from './place-preview.js';

export default {
    props: ['places'],
    template: `
        <section>
            <ul>
                <!-- <place-preview  v-for="place in places"  
                @delete="$emit('delete', email.id)" :key="email.id" 
                :email="email" @click.native="selectEmail(email.id)"> 
                </place-preview> -->
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
        // emitDelete(email){
        //     this.$emit('delete',email.id)
        // }
    },
    components: {
        placePreview
    }
}