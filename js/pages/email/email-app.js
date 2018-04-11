import emailService from '../../services/email.service.js'
import emailList from '../../cmps/email/email-list.js'
import emailDetails from '../../cmps/email/email-details.js'
import emailPreview from '../../cmps/email/email-preview.js'


export default {
    data(){
        return {
            emails: []
        }
    },

    template: `
        <section class="email-app grid-container">
            <h1>email-app</h1>
            <email-list :emails="emails"> </email-list>
            <section class="preview-wrapper">
                <email-preview :emails="emails"> </email-preview>
                <email-details :emails="emails"> </email-details>
            <section>
        </section>`,

    created() {
        emailService.getEmails()
            .then(emails => this.emails = emails);
    },

    components: {
        emailList, 
        emailPreview,
        emailDetails
    }
};