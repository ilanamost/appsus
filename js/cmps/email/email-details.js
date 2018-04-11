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
        <!-- <p v-if="email.isRead">Read </p> <i class="fa fa-envelope-open-o"></i>
        <p v-if="!email.isRead">Unread</p> <i class="fa fa-envelope-o"></i> -->
        <p>{{email.body}}</p>
        <p>{{moment(email.sentAt).format("MMM Do YY")}}</p>
    </section>
    `
}