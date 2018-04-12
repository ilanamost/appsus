import placeMap from '../../cmps/place/place-map.js'
import placeList from '../../cmps/place/place-list.js'
import placeService from '../../services/place.service.js'
import placeFilter from '../../cmps/place/place-filter.js'

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
        placeFilter
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
            this.selectedPlace = place;
        },
        deletePlace(id){
            placeService.deletePlace(id)
            .then(this.setPlaces);
        },
    },

    template: `
            <section>
                <!-- <h1>place-app</h1> -->
                <place-filter :places="places"></place-filter> 
                <place-list :places="places" @selected="selectPlace" @delete="deletePlace"></place-list> 
                <place-map></place-map>
            </section>
        `,
        
}
