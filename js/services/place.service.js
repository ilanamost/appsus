import utilService from './util.service.js'
import storageService from './storage.service.js'
import eventBus, {USR_MSG_DISPLAY} from './event-bus.service.js'

var placessDB = [];
const PLACES_KEY = 'placeApp';


function getPlaces() {
    return new Promise((resolve, reject) => {
        var places = storageService.load(PLACES_KEY);
        if (!placess) {
            places = generatePlaces();
            storageService.store(PLACES_KEY)
        }
        placessDB = places;
        resolve(placessDB);
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


function createPlace(coords) {
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
