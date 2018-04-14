import emailService from '../../services/email.service.js'

export default {
    props: ['email'],
    template: `
            <section class="email-preview">
                <ul class="email form-check" :class="{isRead: email.isRead}" @click="email.isRead = !email.isRead">
                    <li  
                        name="checkbox101"  
                        class="filled-in form-check-input" 
                        :checked="email.isRead" 
                        @change="email.isRead = !email.isRead">
                        
                    </li>
                    <i :class="envelopeClass"></i> 
                    &nbsp; {{email.subject}}
                    <button class="delete is-small" @click.stop="$emit('delete')" title="Delete"></button>
                    
                </ul>
            </section>
    `,
    computed:{
        envelopeClass(){
            return this.email.isRead  ? 'far fa-envelope-open' : 'far fa-envelope';
        }
    }
}
