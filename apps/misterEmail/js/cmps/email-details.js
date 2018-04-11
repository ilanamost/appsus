import emailService from '../services/email.service.js'

export default {
    data () {
        return {
            email: null,
        }
    },
    created () {

    },
    computed: {

    },
    methods: {

    },
    template: `
    <section class="email-details">
        <h1 class="email-subject">{{email.subject}}</h1>
        <!-- <h1 v-if="ok">Yes</h1> -->
        <p v-if="email.isRead">Read</p>
        <p v-if="!email.isRead">Unead</p>
        <p>{{email.body}}</p>
        <p>{{email.sentAt}}</p>
    </section>
    `
}