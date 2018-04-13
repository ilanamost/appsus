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
            emailService.saveEmail(this.composedEmail.subject, this.composedEmail.body)
                .then(emails => {
                    this.emails = emails;
                })
        },

        toggleForm(){
           
        }
    },
    template: `
        <section>
            <button class="button is-info is-small" type="button" @click="show = !show"> Compose </button>

            <form  name="pmForm" id="pmForm" v-if="show" >  
                <input v-model="composedEmail.subject" name="pmSubject" id="pmSubject" type="text" maxlength="64" style="width:98%;" placeholder="Enter email subject" />
                <input  v-model="composedEmail.body" name="pmBody" id="pmBody" type="text" maxlength="64" style="width:98%;" placeholder="Enter email body" />
                <input name="pmAddress" id="pmAddress" type="text" maxlength="64" style="width:98%;" placeholder="noramarcelli@gmail.com" readonly/>
                <button name="pmSubmit" type="submit" @click="composeEmail()">Send</button>
                 
                <ul v-for="email in emails">
                    <li>{{email.subject}}</li>
                </ul> 
            </form>
        </section>
    `
}

