import emailService from '../../services/email.service.js'

export default {
    props: ['email'],
    template: `
            <!-- <section class="email-preview"> -->
                <!-- <ul class="email form-check" :class="{isRead: email.isRead}" @click="email.isRead = !email.isRead"> -->
                    <li  
                        name="checkbox101"  
                        class="email email-preview filled-in form-check form-check-input"
                        :class="{isRead: email.isRead}" 
                        :checked="email.isRead"
                        @click="email.isRead = !email.isRead" 
                        @change="email.isRead = !email.isRead">
                        
                        <i :class="envelopeClass"></i> 
                        &nbsp; {{email.subject}}
                        <button class="delete is-small" @click.stop="$emit('delete')" title="Delete"></button>
                    </li>
                    
                <!-- </ul> -->
            <!-- </section> -->
    `,
    computed:{
        envelopeClass(){
            return this.email.isRead  ? 'far fa-envelope-open' : 'far fa-envelope';
        }
    }
}
