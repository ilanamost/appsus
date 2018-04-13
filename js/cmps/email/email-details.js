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
    <section class="email-details ">
        <div class="message">
            <h1 class="email-subject message-header">{{email.subject}}</h1>
            <div class="message-body">
                <p>{{email.body}}</p>
                <p>{{dateStr}}</p>
            </div>    
        </div>

    </section>
    `
}