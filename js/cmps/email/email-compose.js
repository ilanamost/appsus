import emailService from '../services/email.service.js'
import emailDetails from '../pages/email-details.js';

export default {
    data() {
        return {
            emails: null,
            show: false
        }
    },
    methods: {
        composeEmail() {
            emailService.composeEmail()
            .then(emails => {
                this.emails = emails;
            })
        }
    },
        template: `
        <section>
            <input @input="composeEmail()"/>

            <form action="javascript:sendMail();" name="pmForm" id="pmForm" method="post">
                Email address:
                <input name="pmSubject" id="pmSubject" type="text" maxlength="64" style="width:98%;" />
                <input name="pmSubmit" type="submit" value="Invite" />
                
                <ul v-for="email in emails">
                    <li>{{book.volumeInfo.title}}</li>
                </ul>
        </section>
    `
    }

