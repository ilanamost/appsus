import emailService from '../../services/email.service.js'
import emailList from '../../cmps/email/email-list.js'


export default {
    data(){
        return {
            emails: []
        }
    },

    template: `<section>
        <h1>email-app</h1>
        <email-list :emails="emails"> </email-list>
    </section>`,

    created() {
        emailService.getEmails()
            .then(emails => this.emails = emails);
    },

    components: {
        emailList
    }
};