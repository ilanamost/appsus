import emailService from '../../services/email.service.js'
import emailDetails from './email-details.js';

export default {
    props: ['showCompose'],
    data() {
        return {
            show: false,
            composedEmail: {subject: '',  body: ''}
        }
    },
    methods: {
        composeEmail() {
            emailService.saveEmail(this.composedEmail.subject, this.composedEmail.body)
                .then(() => {
                    this.show = false;
                    this.composedEmail = {subject: '',  body: ''};
                    this.$emit('emailAdded');
                });
        },
        emitCompose(){
            this.show = !this.show;
            this.$emit('compose');
        }
    },
    template: `
        <section>
            <button class="button is-info is-small compose" type="button" @click="emitCompose">Compose</button>

                <form name="pmForm" id="pmForm" v-if="show && showCompose"  @submit.prevent="composeEmail">  
                    <input class="input is-small" name="pmAddress" id="pmAddress" type="text" maxlength="64" style="width:98%;" placeholder="noramarcelli@gmail.com" readonly/>
                    <input class="input is-small" v-model="composedEmail.subject" name="pmSubject" id="pmSubject" type="text" maxlength="64" style="width:98%;" placeholder="Enter email subject" />
                    <input  class="textarea is-small" v-model="composedEmail.body" name="pmBody" id="pmBody" type="text" maxlength="64" style="width:98%;" placeholder="Enter email body" />
                    <button class="button is-info is-small" name="pmSubmit" type="submit">Send</button>
                    
                    <!-- <ul v-for="email in emails">
                        <li>{{email.subject}}</li>
                    </ul>  -->
                </form>
                
        </section>
    `
}

