import emailService from '../../services/email.service.js'
import emailList from '../../cmps/email/email-list.js'
import emailDetails from '../../cmps/email/email-details.js'
import emailPreview from '../../cmps/email/email-preview.js'
import emailFilter from '../../cmps/email/email-filter.js'
import emailCompose from '../../cmps/email/email-compose.js'


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
            <!-- <email-list @delete="deleteEmail" :emails="emails" @selected="selectEmail"> </email-list> -->
            <email-filter @filtered="setFilter"> </email-filter>
            <email-list  :emails="filteredEmails" @selected="selectEmail" @delete="deleteEmail"> </email-list>
            <section class="preview-wrapper">
                <email-compose></email-compose>
                <email-details v-if="selectedEmail" :email="selectedEmail"> </email-details>
            </section>
        </section>`,

    created() {
        this.setEmails();
    },

    computed:{
      
    },

    methods:{
        selectEmail(emailId) {
            var email = this.emails.find(email => email.id === emailId);
            this.selectedEmail = email;
        },
        setEmails(){ 
            emailService.getEmails()
            .then(emails => this.emails = emails)
            .then(() => this.filterEmails())
        },
        deleteEmail(id){
            emailService.deleteEmail(id)
            .then(this.setEmails)
        },
        setFilter(filterBy) {
            this.filter  = filterBy;
            this.filterEmails()
            // console.log('Setting filter:', filter)
        },
        filterEmails() {
            console.log('filtering emails:', this.emails)
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
        emailFilter,
        emailCompose
    }
};