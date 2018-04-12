import utilService from './util.service.js'
import storageService from './storage.service.js'
import eventBus, { USR_MSG_DISPLAY } from './event-bus.service.js'

var placessDB = [];
var tagsDB = ['Fun', 'Food', 'Work', 'Romantic', 'Music', 'Dance', 'Extrim', 'Family', 'Children'];

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


function generatePlaces() {
    var places = []
    for (let index = 0; index < 7; index++) {
        var place = createPlace(index + 1)
        places.push(place)
    }
    return places;
}


function createPlace(lat, lng) {
    var loremIpsum = new LoremIpsum();

    var place = {
        id: i,
        name: loremIpsum.generate(utilService.getRandomInt(1, 4), utilService.getRandomInt(3, 6)),
        // sentAt: utilService.randomDate(new Date(2012, 0, 1), new Date()).valueOf(),
        desc: loremIpsum.generate(utilService.getRandomInt(10, 30), utilService.getRandomInt(1, 4)),
        tags: [],
        imgUrl: `img/${utilService.getRandomInt(1, 20)}.jpg`,

        // isRead: false,
    }
    var randomTagIdx = utilService.getRandomInt(0, tagsDB.length);
    for (var i = 0; i < randomTagIdx; i++) {
        var tag = tagsDB[randomTagIdx];
        tags.push(tag);
    }
    return place;
}
