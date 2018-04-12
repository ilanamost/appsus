import emailService from '../../services/email.service.js'
import emailList from '../../cmps/email/email-list.js'
import emailDetails from '../../cmps/email/email-details.js'
import emailPreview from '../../cmps/email/email-preview.js'
import emailFilter from '../../cmps/email/email-filter.js'


export default {
    data(){
        return {
            emails: [],
            selectedEmail: null,
            filter: null,
            filteredEmails: []
        }
    },

    template: `
        <section class="email-app grid-container">
            <email-filter @filtered="setFilter"> </email-filter>
            <email-list :emails="filteredEmails" @selected="selectEmail"> </email-list>
            <section class="preview-wrapper">
                <email-details v-if="selectedEmail" :email="selectedEmail"> </email-details>
            </section>
        </section>`,

    created() {
        emailService.getEmails()
            .then(emails => this.emails = emails)
            .then(() => this.filterEmails())
    },

    computed:{
      
    },

    methods:{
        selectEmail(emailId) {
            var email = this.emails.find(email => email.id === emailId);
            this.selectedEmail = email;
        },
        setFilter(filterBy) {
            this.filter  = filterBy;
            this.filterEmails()
            // console.log('Setting filter:', filter)
        },
        filterEmails() {
            emailService.filterEmails(this.emails, this.filter)
                .then(curEmails => {
                    this.filteredEmails = curEmails
                });
        }
    },

    components: {
        emailList, 
        emailPreview,
        emailDetails,
        emailFilter
    }
};