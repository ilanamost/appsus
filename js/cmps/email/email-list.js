import emailService from '../../services/email.service.js'
import emailPreview from './email-preview.js';

export default {
    props: ['emails'],
    data() {
        return {
            unreadEmails: 0
        }
    },
    template: `
        <section class="email-list">
            <div class="block">

                <button class="button is-info is-outlined is-small" @click="sortByTitle" 
                title="Sort emails by Subject">By Subject &nbsp<i class="fas fa-sort-amount-up"></i></button>
                <button class="button is-info is-outlined is-small" @click="sortByDate" 
                title="Sort emails by date ">By Date &nbsp <i class="fas fa-sort-amount-up"></i></button>
                
                <span class="tag is-link unread">Unread: {{getNumOfUnreadEmails}} </span>
                
                
                <div class="notification is-info is-small">
                    <ul>
                        <email-preview @details="$emit('details')" v-for="email in emails"  
                        @delete="$emit('delete', email.id)" :key="email.id" 
                        :email="email" @click.native="selectEmail(email.id)"> 
                        </email-preview>
                    </ul>
                </div>    
            
            </div>    
        </section>
    `,
    methods: {
        selectEmail(emailId) {
            this.$emit('selected', emailId);
        },
        sortByTitle() {
            this.emails.sort(emailService.sortByTitle);
        },
        sortByDate() {
            this.emails.sort(emailService.sortByDate);
        },
        emitDelete(email) {
            this.$emit('delete', email.id)
        }
    },

    computed: {
        getNumOfUnreadEmails() {
            var count = 0;

            this.emails.forEach((email) => { if (!email.isRead) count++ });
            return count;
        }
    },

    components: {
        emailPreview
    }
}