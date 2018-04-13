import placeMap from '../../cmps/place/place-map.js'
import placeList from '../../cmps/place/place-list.js'
import placeDetails from '../../cmps/place/place-details.js'
import placeEdit from '../../cmps/place/place-edit.js'
import placeService from '../../services/place.service.js'
import mapService from '../../services/map.service.js'
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
        },
        setFilter(filterBy){
            console.log('filterBy', filterBy);
            
            placeService.geocoding(filterBy.name).then(function (coords) {
                console.log('coords', coords);
                 var lat = coords.lat;
                 var lng = coords.lng; 
                 var TEMP_PIN_COLOR = "FFA500";
                 mapService.addMarker({lat, lng}, filterBy.name, TEMP_PIN_COLOR);
            });
        }
    },

    template: `
            <section>
                <place-filter :places="places" @filtered="setFilter"></place-filter> 
                <place-list :places="places" @selected="selectPlace" @delete="deletePlace"></place-list> 
                <place-map :places="places"></place-map>
                <place-details v-if="selectedPlace && showDetails" :place="selectedPlace" @switchToEdit="toggleEditAndDetails"></place-details>
                <place-edit v-if="showEdit" :place="selectedPlace"></place-edit>
                <button type="button" v-if="showEdit" @click="toggleEditAndDetails">Close</button>
                <!-- <button type="button" v-if="showEdit" @click="toggleEditAndDetails">Save</button> -->
            </section>
        `,
}
