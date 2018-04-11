import emailService from '../../services/email.service.js'

export default {
    props: ['email'],
    created () {

    },
   computed: {
      dateStr() {
          return moment(this.email.sentAt).format("MMM Do YY")
      }
   },
    template: `
    <section class="email-details">
        <h1 class="email-subject">{{email.subject}}</h1>
        <p>{{email.body}}</p>
        <p>{{dateStr}}</p>
    </section>
    `
}