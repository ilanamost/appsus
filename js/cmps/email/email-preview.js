import emailService from '../../services/email.service.js'

export default {
    props: ['email'],
    template: `
            <section class="email-preview">
                <li class="email">
                    <input type="checkbox" id="checkbox101"  
                    :class="{isRead: email.isRead}" class="filled-in form-check-input" 
                    :checked="email.isRead" /><i class="far" :class="email.isRead? 'fa-envelope-open' : 'fa-envelope'"></i> 
                    &nbsp; {{email.subject}}
                    <label class="form-check-label" for="checkbox101">Filled-in checkbox</label>
                </li>
            </section>
    `,
    created() {
        // const emailId = +this.$route.params.emailId;
        // emailService.getById(emailId)
        // .then(email => this.email = email)

    },
    methods: {

    },

    components: {

    }
}