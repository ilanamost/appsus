import emailService from '../services/email.service.js'

export default {
    props: ['email'],
    template: `
        <section class="email">
            <h1 :class="{isRead: email.isRead}">this.email.subject</h1>
        </section>
    `,
    data() {
        return {
            email: null
        }
    },
    created() {
        // const emailId = +this.$route.params.emailId;
        // emailService.getById(emailId)
        // .then(email => this.email = email)

    },
    methods: {
   
    },

    components: {
      
    }
}