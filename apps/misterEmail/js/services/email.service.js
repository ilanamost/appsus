import utilService from './util.service.js'
import storageService from './storage.service.js'
import eventBus, {USR_MSG_DISPLAY} from './event-bus.service.js'

var emailsDB = [];

const EMAILS_KEY = 'emailsApp';

function getEmails() {
    return new Promise((resolve, reject) => {
        var emails = storageService.load(EMAILS_KEY);
        if (!emails) {
            emails = generateEmails();
            storageService.store(EMAILS_KEY, emails)
        }
        emailsDB = emails;
        // emitEmailsCount();
        resolve(emailsDB);
    });
}




function generateEmails() {
    var emails = []
    for (let index = 0; index < 20; index++) {
        var email = createEmail()
        emails.push(email)
    }
    return emails;
}




