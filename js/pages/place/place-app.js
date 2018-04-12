import placeMap from '../../cmps/place/place-list.js'
import placeList from '../../cmps/place/place-list.js'

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
    template: `
            <section>
                <h1>place-app</h1>
                <!-- <place-list></place-list> 
               <place-map></place-map> -->
            </section>
        `,
        
}
