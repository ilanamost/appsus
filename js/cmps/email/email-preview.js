import emailService from '../../services/email.service.js'

export default {
    props: ['email'],
    template: `
        <li class="email">
            <h1 :class="{isRead: email.isRead}">{{email.subject}}</h1>
        </li>
    `,
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