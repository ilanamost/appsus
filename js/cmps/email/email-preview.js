import emailService from '../../services/email.service.js'

export default {
    props: ['email'],
    template: `
            <section class="email-preview">
                <li class="email form-check" :class="{isRead: email.isRead}" @click="email.isRead = !email.isRead">
                    <input type="checkbox" 
                        name="checkbox101"  
                        class="filled-in form-check-input" 
                        :checked="email.isRead" 
                        @change="email.isRead = !email.isRead"/>
                    <i :class="envelopeClass"></i> 
                    
                    &nbsp; {{email.subject}}
                    <button @click.stop="$emit('delete')" title="Delete"><i class="far fa-trash-alt"></i></button>
                </li>
            </section>
    `,
    computed:{
        envelopeClass(){
            return this.email.isRead  ? 'far fa-envelope-open' : 'far fa-envelope';
        }
    }
}
