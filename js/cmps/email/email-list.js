import emailService from '../../services/email.service.js'
import emailPreview from './email-preview.js';

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
        <button @click="sortByTitle">By title</button>
        <button @click="sortByDate">By Date</button>
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
    components: {
        emailPreview
    }
}