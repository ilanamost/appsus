import placeMap from '../../cmps/place/place-map.js'
import placeList from '../../cmps/place/place-list.js'
import placeService from '../../services/place.service.js'

export default {
    data(){
        return {
            places: [],
        }
    },
    components: {
        placeMap,
        placeList
    },
    created() {
        this.setPlaces();
    },

    methods:{
        setPlaces(){ 
            placeService.getPlaces()
            .then(places => this.places = places)
            // .then(() => this.filterEmails())
        }
    },

    template: `
            <section>
                <!-- <h1>place-app</h1> -->
                <place-list :places="places"></place-list> 
                <place-map></place-map>
            </section>
        `,
        
}
