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
            <h1>email-app</h1>
            <email-list :emails="emails" @selected="selectEmail"> </email-list>
            <section class="preview-wrapper">
                <email-details v-if="selectedEmail" :email="selectedEmail"> </email-details>
            </section>
        </section>`,

    created() {
        // debugger;
        emailService.getEmails()
            .then(emails => this.emails = emails);

        this.selectedEmail = this.emails[0];
    },

    computed:{
        // emailToShow() {
        //     debugger;
        //     if(!this.selectedEmail) {
        //         return this.emails[0];
        //     } else{
        //         return this.selectedEmail;
        //     }
        // }
    },

    methods:{
        selectEmail(emailId) {
            var email = this.emails.find(email => email.id === emailId);
            this.selectedEmail = email;
        }

        // emailToShow() {
        //     debugger;
        //     if(!this.selectedEmail) {
        //         return this.emails[0];
        //     } else{
        //         return this.selectedEmail;
        //     }
        // }
    },

    components: {
        emailList, 
        emailPreview,
        emailDetails
    }
};