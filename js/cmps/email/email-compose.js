import emailService from '../../services/email.service.js'
import emailDetails from './email-details.js';

export default {
    data() {
        return {
            emails: null,
            show: false,
            composedEmail: {subject: '',  body: ''}
        }
    },
    methods: {
        composeEmail() {
            emailService.composeEmail()
                .then(emails => {
                    this.emails = emails;
                })
        },

        toggleForm(){
           
        }
    },
    template: `
        <section>
            <button type="button" @click="toggleForm"> Compose </button>

            <!-- <input type="text" @input="composeEmail()" /> -->
            <form action="javascript:sendMail();" name="pmForm" id="pmForm" method="post" >  
                <input v-model="composedEmail.subject" name="pmSubject" id="pmSubject" type="text" maxlength="64" style="width:98%;" placeholder="Enter email subject" />
                <input  v-model="composedEmail.body" name="pmBody" id="pmBody" type="text" maxlength="64" style="width:98%;" placeholder="Enter email body" />
                <input name="pmAddress" id="pmAddress" type="text" maxlength="64" style="width:98%;" placeholder="noramarcelli@gmail.com" readonly/>
                <button name="pmSubmit" type="submit" @click="composeEmail(composedEmail.subject, composedEmail.body)">Send</button>
                 
                <ul v-for="email in emails">
                    <li>{{email.subject}}</li>
                </ul> 
            </form>
        </section>
    `
}

