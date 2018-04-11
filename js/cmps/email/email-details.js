import emailService from '../../services/email.service.js'

export default {
    props: ['email'],
    created () {

    },
    methods: {

    },
    template: `
    <section class="email-details">
        <h1 class="email-subject">{{email.subject}}</h1>
        <p v-if="email.isRead">Read</p>
        <p v-if="!email.isRead">Unread</p>
        <p>{{email.body}}</p>
        <p>{{moment(email.sentAt).format("MMM Do YY")}}</p>
    </section>
    `
}