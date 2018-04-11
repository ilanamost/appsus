import emailService from '../../services/email.service.js'

export default {
    props: ['email'],
    template: `
            <section class="email-preview">
                <li class="email">
                    <h1 :class="{isRead: email.isRead}">{{email.subject}}</h1>
                </li>
            </section>
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