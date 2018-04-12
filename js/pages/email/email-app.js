import emailService from '../../services/email.service.js'
import emailList from '../../cmps/email/email-list.js'
import emailDetails from '../../cmps/email/email-details.js'
import emailPreview from '../../cmps/email/email-preview.js'


export default {
    data(){
        return {
            emails: [],
            selectedEmail: null
        }
    },

    template: `
        <section class="email-app grid-container">
            <email-list :emails="emails" @selected="selectEmail"> </email-list>
            <section class="preview-wrapper">
                <email-details v-if="selectedEmail" :email="selectedEmail"> </email-details>
            </section>
        </section>`,

    created() {
        emailService.getEmails()
            .then(emails => this.emails = emails);
    },

    computed:{
      
    },

    methods:{
        selectEmail(emailId) {
            var email = this.emails.find(email => email.id === emailId);
            this.selectedEmail = email;
        }
    },

    components: {
        emailList, 
        emailPreview,
        emailDetails
    }
};