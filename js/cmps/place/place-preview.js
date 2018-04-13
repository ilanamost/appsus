import placeService from '../../services/place.service.js'

export default {
    props: ['place'],
    template: `
            <section class="place-preview">
                <ul class="email form-check">
                    <li>{{place.name}}</li>
                    <button class="delete is-small" @click.stop="$emit('delete')" title="Delete"></button>
                </ul>    
            </section>
    `,
    computed:{
     
    }
}