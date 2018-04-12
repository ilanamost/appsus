import placeService from '../../services/place.service.js'

export default {
    props: ['place'],
    template: `
            <section>
                <li>{{place.name}}</li>
                <button @click.stop="$emit('delete')" title="Delete"><i class="far fa-trash-alt"></i></button>
            </section>
    `,
    computed:{
     
    }
}