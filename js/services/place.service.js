import utilService from './util.service.js'
import storageService from './storage.service.js'
import eventBus, { USR_MSG_DISPLAY } from './event-bus.service.js'
import LoremIpsum from './loremIpsum.js'

var placessDB = [];
var tagsDB = ['Fun', 'Food', 'Work', 'Romantic', 'Music', 'Dance', 'Extrim', 'Family', 'Children'];
var placesNamesDB = ['alaska', 'times squre', 'ko phi phi', 'London Eye', 'petra', 'Niagra falls'];

const PLACES_KEY = 'placeApp';


function getPlaces() {
    return new Promise((resolve, reject) => {
        var places = storageService.load(PLACES_KEY);
        if (!places) {
            places = generatePlaces();
            storageService.store(PLACES_KEY, places);
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
        name: placesNamesDB[utilService.getRandomInt(0, placesNamesDB.length)],
        desc: loremIpsum.generate(utilService.getRandomInt(10, 30), utilService.getRandomInt(1, 4)),
        tags: [],
        imgUrl: `img/${utilService.getRandomInt(1, 20)}.jpg`,
    }
    var randomTagIdx = utilService.getRandomInt(0, tagsDB.length);
    for (var j = 0; j < randomTagIdx; j++) {
        var tag = tagsDB[randomTagIdx];
        place.tags.push(tag);
    }
    return place;
}

export default{
    getPlaces, 
    generatePlaces,
    createPlace
}