import emailService from '../../services/email.service.js'
import emailPreview from './email-preview.js';


export default {
    props: ['emails'],
    template: `
        <section class="email">
            <ul>
                <email-preview v-for="email in emails" :key="email.id" :email="email" @click.native="selectEmail(idx)"> 
                </email-preview>
           </ul>
        </section>
    `,
  
    methods: {
        selectEmail(idx) {
            var email = this.emails[idx];
            this.$emit('selected', email.id);
        }
    },

    components: {
        emailPreview
    }
}