import emailService from '../../services/email.service.js'

export default {
    props: ['email'],
    template: `
            <section class="email-preview">
                <li class="email">
                    <h1 :class="{isRead: email.isRead}" v-if="email.isRead"><i class="far fa-envelope-open"></i> &nbsp {{email.subject}}</h1>
                    <h1 :class="{isRead: !email.isRead}" v-else><i class="far fa-envelope"></i> &nbsp {{email.subject}}</h1>
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