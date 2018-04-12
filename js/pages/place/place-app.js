import placeMap from '../../cmps/place/place-map.js'
import placeList from '../../cmps/place/place-list.js'
import placeDetails from '../../cmps/place/place-details.js'
import placeService from '../../services/place.service.js'

export default {
    data(){
        return {
            places: [],
            selectedPlace: null
        }
    },
    components: {
        placeMap,
        placeList,
        placeDetails
    },
    created() {
        this.setPlaces();
    },

    methods:{
        setPlaces(){ 
            placeService.getPlaces()
            .then(places => this.places = places)
            // .then(() => this.filterEmails())
        },
        selectPlace(placeId) {
            var place = this.places.find(place => place.id === placeId);
            console.log({place})
            this.selectedPlace = place;
        },
        deletePlace(id){
            placeService.deletePlace(id)
            .then(this.setPlaces);
        },
    },

    template: `
            <section>
                <place-list :places="places" @selected="selectPlace" @delete="deletePlace" :place="selectedPlace"></place-list> 
                <place-map></place-map>
                <place-details v-if="selectedPlace" :place="selectedPlace"></place-details>
            </section>
        `,
        
}
