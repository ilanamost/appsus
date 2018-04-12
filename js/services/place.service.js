import utilService from './util.service.js'
import storageService from './storage.service.js'
import eventBus, { USR_MSG_DISPLAY } from './event-bus.service.js'
import LoremIpsum from './loremIpsum.js'
import placeFilter from '../cmps/place/place-filter.js'

var placesDB = [];

const PLACES_KEY = 'placeApp';
const LOCATION_KEY = 'AIzaSyD691kT7ZRaeQx1jU9EVr9UdxIYGg2EFkE';


function getPlaces() {
    return new Promise((resolve, reject) => {
        var places = storageService.load(PLACES_KEY);
        if (!places) {
            places = generatePlaces();
            storageService.store(PLACES_KEY, places);
        }
        placesDB = places;
        resolve(placesDB);
    });
}


function generatePlaces() {
    var places = [];
    var places =
        [{
            id: 1,
            name: 'Alaska',
            desc: 'Alaska is a U.S. state located in the northwest extremity of North America.',
            tags: ['Cold', 'Extrim'],
            lat: 64.2008413,
            lng: -149.4936733,
            imgUrl: `img/15.jpg`
        },

        {
            id: 2,
            name: 'Times Squre',
            desc: 'Times Square is a major commercial intersection, tourist destination, entertainment center and neighborhood in the Midtown Manhattan section of New York City at the junction of Broadway and Seventh Avenue.',
            tags: ['Fun', 'Family'],
            lat: 40.759011,
            lng: -73.9844722,
            imgUrl: `img/2.jpg`
        },

        {
            id: 3,
            name: 'Ko Phi Phi',
            desc: 'The Phi Phi Islands are an island group in Thailand, between the large island of Phuket and the west Strait of Malacca coast of the mainland.',
            tags: ['Relax', 'Family'],
            lat: 7.740738,
            lng: 98.77841,
            imgUrl: `img/3.jpg`
        },

        {
            id: 4,
            name: 'London Eye',
            desc: 'The London Eye, known for sponsorship reasons as the Coca-Cola London Eye, is a giant Ferris wheel on the South Bank of the River Thames in London.',
            tags: ['Relax', 'Family', 'Fun'],
            lat: 51.503324,
            lng: -0.119543,
            imgUrl: `img/10.jpg`
        },

        {
            id: 5,
            name: 'Niagra Falls',
            desc: 'Niagara Falls is the collective name for three waterfalls that straddle the international border between the Canadian province Ontario and the American state of New York. ',
            tags: ['Relax', 'Romantic'],
            lat: 43.0828162,
            lng: -79.07416289999999,
            imgUrl: `img/5.jpg`
        }];
    return places;
}

function deletePlace(placeId) {
    var places = storageService.load(PLACES_KEY)
    var placeIdx = places.findIndex(place => place.id === placeId);
    places.splice(placeIdx, 1);
    storageService.store(PLACES_KEY, places);
    return Promise.resolve({ succes: true })
}

export default {
    getPlaces,
    generatePlaces,
    deletePlace,
    placeFilter,
    // createPlace
}