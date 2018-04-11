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
        <h1 class="email-subject"><i class="fa fa-envelope-open-o"></i>{{email.subject}}</h1>
        <!-- <p v-if="email.isRead">Read </p> 
        <p v-if="!email.isRead">Unread</p> <i class="fa fa-envelope-o"></i> -->
        <p>{{email.body}}</p>
        <p>{{dateStr}}</p>
    </section>
    `
}