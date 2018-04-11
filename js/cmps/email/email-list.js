import emailService from '../services/email.service.js'
import emailPreview from './email-preview.js';


export default {
    template: `
        <section class="email">
            <ul v-for="email in emails">
            <li><email-preview> <email-preview></li>
           </ul>
        </section>
    `,
    data() {
        return {
            emails: []
        }
    },
    created() {
        emailService.getEmails()
            .then(emails => this.emails = emails);
    },
    methods: {
     
    },

    components: {
        emailPreview
    }
}