import placeService from '../../services/place.service.js'

export default {
    props: ['place'],
    created () {

    },
   computed: {
      dateStr() {
          return moment(this.place.sentAt).format("MMM Do YY")
      }
   },
    template: `
    <section class="place-details">
        <!-- <h1 class="email-subject">{{email.subject}}</h1> -->
        <p>{{place.name}}</p>
        <p>{{place.desc}}</p>
        <p>{{place.tags}}</p>
        <img src="{{imgUrl}}"/>
    </section>
    `
}