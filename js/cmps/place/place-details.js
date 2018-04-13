import placeService from '../../services/place.service.js'

export default {
    props: ['place'],
    created() {

    },
    computed: {
        dateStr() {
            return moment(this.place.sentAt).format("MMM Do YY")
        }
    },
    template: `
    <section class="place-details">
        <p>{{place.name}}</p>
        <p>{{place.desc}}</p>
        <ul v-for="tag in place.tags">
            <li>{{tag}}</li>
        </ul> 
        <img :src="place.imgUrl"/>
    </section>
    `
}