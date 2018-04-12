import emailService from '../../services/email.service.js'
import emailPreview from './email-preview.js';

export default {
    props: ['emails'],
    data() {
        return {
           unreadEmails : 0
        }
    },
    template: `
        <section class="email-list">
        <h1>Total emails: {{getNumOfUnreadEmails}} </h1>
        <button @click="sortByTitle" title="Sort emails by Subject">By Subject<i class="fas fa-sort-amount-up"></i></button>
        <button @click="sortByDate" title="Sort emails by date">By Date<i class="fas fa-sort-amount-up"></i></button>
            <ul>
                <email-preview  v-for="email in emails"  
                @delete="$emit('delete', email.id)" :key="email.id" 
                :email="email" @click.native="selectEmail(email.id)"> 
                </email-preview>
           </ul>
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
        emitDelete(email){
            this.$emit('delete',email.id)
        }
    },

    computed:{
        getNumOfUnreadEmails(){
            var count = 0;

            this.emails.forEach((email)  => 
                {if(!email.isRead) count++});
            return count;
        }
    },

    components: {
        emailPreview
    }
}