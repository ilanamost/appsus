import emailService from '../../services/email.service.js'
import emailList from '../../cmps/email/email-list.js'
import emailDetails from '../../cmps/email/email-details.js'
import emailPreview from '../../cmps/email/email-preview.js'
import emailFilter from '../../cmps/email/email-filter.js'
import emailCompose from '../../cmps/email/email-compose.js'


export default {
    data() {
        return {
            emails: [],
            selectedEmail: null,
            filter: null,
            filteredEmails: [],
            showCompose: false,
            showDetails: true
        }
    },

    template: `
        <!-- <section class="email-app"> -->
        <section class="email-app">
            <!-- <email-list @delete="deleteEmail" :emails="emails" @selected="selectEmail"> </email-list> -->
            <section class="email-control-panel">
                <div class="block">
                    <div class="columns">
                        <div class="column is-11">
                            <email-filter @filtered="setFilter"></email-filter>
                        </div>
                        
                    </div>    
                </div>   
            </section>

            <section class="deatils-compose">
            <div class="block">
                <div class="columns">
                    <div class="column is-3">
                        <email-list @details="showDetailsFunc" class="notification" :emails="filteredEmails" 
                        @selected="selectEmail" @delete="deleteEmail"> </email-list>
                    </div>
                   
                    <div class="column is-9">
                        <email-compose @emailAdded="setEmails();showDetailsFunc()" :showCompose="showCompose" @compose="showComposeFunc"></email-compose>
                        <email-details  v-if="selectedEmail && showDetails" class="notification" 
                        :email="selectedEmail"> </email-details>
                        <!-- <div class="column is-1"> -->
                        <!-- </div> -->
                    </div>
                </div>
            </div>
            </section>
            
           
        </section>`,

    created() {
        this.setEmails();
        
    },
    methods: {

        selectEmail(emailId) {
            var email = this.emails.find(email => email.id === emailId);
            this.selectedEmail = email;
        },
        setEmails() {
            emailService.getEmails()
                .then(emails => this.emails = emails)
                .then(() => this.filterEmails())
        },
        deleteEmail(id) {
            emailService.deleteEmail(id)
                .then(this.setEmails)
        },
        setFilter(filterBy) {
            this.filter = filterBy;
            this.filterEmails()
            // console.log('Setting filter:', filter)
        },
        filterEmails() {
            console.log('filtering emails:', this.emails)
            emailService.filterEmails(this.emails, this.filter)
                .then(curEmails => {
                    this.filteredEmails = curEmails;
                    this.selectedEmail = this.emails[0];
                });
        },
        showComposeFunc() {
            this.showCompose = true;
            this.showDetails = false;
        },
        showDetailsFunc() {
            this.showDetails = true;
            this.showCompose = false;
        },
    },

    components: {
        emailList,
        emailPreview,
        emailDetails,
        emailFilter,
        emailCompose
    }
};