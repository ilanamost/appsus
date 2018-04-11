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


function createEmail() {
    var loremIpsum = new LoremIpsum();

    var email = {
        id: getNextId(emailsDB),
        subject: loremIpsum.generate(utilService.getRandomInt(1, 4), utilService.getRandomInt(3, 6)),
        sentAt: randomDate(new Date(2012, 0, 1), new Date()).valueOf(),  
        body: loremIpsum.generate(utilService.getRandomInt(10, 30), utilService.getRandomInt(1, 4)),
        isRead: false,
    }
    return email;
}




