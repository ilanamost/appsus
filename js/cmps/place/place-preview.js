import placeService from '../../services/place.service.js'

export default {
    props: ['place'],
    template: `
            <section>
                <li>{{place.name}}</li>
                <!-- <li></li> -->
            </section>
    `,
    computed:{
     
    }
}