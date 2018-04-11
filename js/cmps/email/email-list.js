import emailService from '../../services/email.service.js'
import emailPreview from './email-preview.js';


export default {
    props: ['emails'],
    template: `
        <section class="email-list">
            <ul>
                <email-preview v-for="email in emails" :key="email.id" :email="email"> </email-preview>
           </ul>
        </section>
    `,
  
    methods: {
     
    },

    components: {
        emailPreview
    }
}