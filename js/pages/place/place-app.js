import placeMap from '../../cmps/place/place-map.js'
import placeList from '../../cmps/place/place-list.js'
import placeDetails from '../../cmps/place/place-details.js'
import placeEdit from '../../cmps/place/place-edit.js'
import placeService from '../../services/place.service.js'
import placeFilter from '../../cmps/place/place-filter.js'

export default {
    data(){
        return {
            places: [],
            selectedPlace: null,
            showEdit:false,
            showDetails:true
        }
    },
    components: {
        placeMap,
        placeList,
        placeDetails,
        placeFilter,
        placeEdit
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
            this.showEdit = false;
            this.showDetails = true;
            var place = this.places.find(place => place.id === placeId);
            console.log({place})
            this.selectedPlace = place;
        },
        deletePlace(id){
            placeService.deletePlace(id)
            .then(this.setPlaces);
        },
        func(){
            this.showEdit = true;
            this.showDetails = false;
        },
        toggleEditAndDetails(){
            this.showEdit = !this.showEdit;
            this.showDetails = !this.showDetails;
        }
    },

    template: `
            <section>
                <place-filter :places="places"></place-filter> 
                <place-list :places="places" @selected="selectPlace" @delete="deletePlace"></place-list> 
                <place-map :places="places"></place-map>
                <place-details v-if="selectedPlace && showDetails" :place="selectedPlace" @switchToEdit="toggleEditAndDetails"></place-details>
                <place-edit v-if="showEdit" :place="selectedPlace"></place-edit>
                <button type="button" v-if="showEdit" @click="toggleEditAndDetails">Close</button>
            </section>
        `,
}
