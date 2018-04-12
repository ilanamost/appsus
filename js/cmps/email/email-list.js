import emailService from '../../services/email.service.js'
import emailPreview from './email-preview.js';
// import eventBus, { USR_MSG_DISPLAY, EMAILS_COUNT } from '../../services/event-bus.service.js'


export default {
    props: ['emails'],
    data() {
        return {
            emailsCount: 0
        }
    },
    template: `
        <section class="email-list">
        <h1>Total emails: {{emails.length}} </h1>
            <ul>
                <email-preview v-for="email in emails" :key="email.id" :email="email" @click.native="selectEmail(email.id)"> 
                </email-preview>
           </ul>
        </section>
    `,
  
    methods: {
        selectEmail(emailId) {
            this.$emit('selected', emailId);
        }
    },

    components: {
        emailPreview
    }
}