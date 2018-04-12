import utilService from './util.service.js'
import storageService from './storage.service.js'
import eventBus, { USR_MSG_DISPLAY, EMAILS_COUNT } from './event-bus.service.js'
import LoremIpsum from './loremIpsum.js'
import emailFilter from '../cmps/email/email-filter.js'

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
        resolve(emailsDB);
    });
}


function generateEmails() {
    var emails = []
    for (let index = 0; index < 20; index++) {
        var email = createEmail(index + 1)
        emails.push(email)
    }
    return emails;
}


function createEmail(i) {
    var loremIpsum = new LoremIpsum();

    var email = {
        id: i,
        subject: loremIpsum.generate(utilService.getRandomInt(1, 4), utilService.getRandomInt(3, 6)),
        sentAt: utilService.randomDate(new Date(2012, 0, 1), new Date()).valueOf(),
        body: loremIpsum.generate(utilService.getRandomInt(10, 30), utilService.getRandomInt(1, 4)),
        isRead: false,
    }
    return email;
}

function sortByTitle(emailA, emailB) {
    var nameA = emailA.subject.toUpperCase();
    var nameB = emailB.subject.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;

    // names must be equal
    return 0;
}

function sortByDate(emailA, emailB) {
    var nameA = emailA.sentAt;
    var nameB = emailB.sentAt;

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;

    // names must be equal
    return 0;
}

function deleteEmail(emailId) {
    var emails = storageService.load(EMAILS_KEY)
    var emailIdx = emails.findIndex(email => email.id === emailId);
    emails.splice(emailIdx, 1);
    storageService.store(EMAILS_KEY, emails);
    return Promise.resolve({ succes: true })
}


function emitEmailsCount() {
    eventBus.$emit(EMAILS_COUNT, emailsDB.length);
}


function filterEmails(emails, filter = null) {
    return new Promise((resolve, reject) => {
        var filteredEmails = emails.slice();
        console.log(filter);
        if (filter) {
            var fromDate = filter.fromDate ? new Date(filter.fromDate) : -Infinity;
            var toDate = filter.toDate ? new Date(filter.toDate) : Infinity;
            if (filter && filter.filterBy === 'read') filter.filterBy = true;
            if (filter && filter.filterBy === 'unRead') filter.filterBy = false;

            if (filter && filter.filterBy !== 'all') filteredEmails = emails.filter(email => {
                return email.subject.indexOf(filter.bySubject) !== -1
                    && email.sentAt >= fromDate && email.sentAt <= toDate
                    // && email.isRead === filter.isRead

                // && email.isRead === filter.filterBy)
            })
            else if (filter && filter.filterBy === 'all') filteredEmails = emails.filter(email => {
                return email.subject.indexOf(filter.bySubject) !== -1
                    && email.sentAt >= fromDate && email.sentAt <= toDate
                    // && email.isRead === filter.isRead
            })
    };

resolve(filteredEmails);
    });
}

function sendEmail() {
    window.open('mailto:noramarcelli@gmail.com?subject=subject&body=body');
}


export default {
    getEmails,
    createEmail,
    sortByTitle,
    sortByDate,
    deleteEmail,
    filterEmails,
    sendEmail
}



