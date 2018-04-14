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
    places =
        [{
            id: 1,
            name: 'Alaska',
            desc: 'Alaska is a U.S. state located in the northwest extremity of North America.',
            tags: ['Extrim', 'Fun', 'Romantic'],
            lat: 64.2008413,
            lng: -149.4936733,
            imgUrl: `img/15.jpg`
        },

        {
            id: 2,
            name: 'Brooklyn Bridge',
            desc: 'Times Square is a major commercial intersection, tourist destination, entertainment center and neighborhood in the Midtown Manhattan section of New York City at the junction of Broadway and Seventh Avenue.',
            tags: ['Romantic', 'Fun', 'Family'],
            lat: 40.759011,
            lng: -73.9844722,
            imgUrl: `img/8.jpg`
        },

        {
            id: 3,
            name: 'Ko Phi Phi',
            desc: 'The Phi Phi Islands are an island group in Thailand, between the large island of Phuket and the west Strait of Malacca coast of the mainland.',
            tags: ['Fun', 'Romantic', 'Food', 'Dance', 'Extrim'],
            lat: 7.740738,
            lng: 98.77841,
            imgUrl: `img/1.jpg`
        },

        {
            id: 4,
            name: 'London Eye',
            desc: 'The London Eye, known for sponsorship reasons as the Coca-Cola London Eye, is a giant Ferris wheel on the South Bank of the River Thames in London.',
            tags: ['Romantic', 'Family', 'Fun'],
            lat: 51.503324,
            lng: -0.119543,
            imgUrl: `img/10.jpg`
        },

        {
            id: 5,
            name: 'Niagra Falls',
            desc: 'Niagara Falls is the collective name for three waterfalls that straddle the international border between the Canadian province Ontario and the American state of New York. ',
            tags: ['Fun', 'Romantic', 'Family', 'Extrim'],
            lat: 43.0828162,
            lng: -79.07416289999999,
            imgUrl: `img/18.jpg`
        },
        {
            id: 6,
            name: 'Mexico city',
            desc: 'Mexico City or Mexico FD is the capital city of Mexico, a large and populous city located in the central part of the country. The number of the dwellers is estimated to be close to 9 million people. Undoubtedly a key economic, political and cultural center of the country, Mexico City is filled with attractions and points of interest worth to be seen.',
            tags: ['Dance', 'Family', 'Fun', 'Romantic'],
            lat: 19.432608,
            lng: -99.133209,
            imgUrl: `img/11.jpg`
        },
        {
            id: 7,
            name: 'Blue Spirit Costa Rica',
            desc: 'Blue Spirit is one of the foremost world-class yoga and meditation retreat centers in Costa Rica, providing an extraordinary setting to all who are dedicated to spiritual transformation, personal growth, and environmental sustainability.',
            tags: ['Fun', 'Dance', 'Family', 'Romantic'],
            lat: 9.934739,
            lng: -84.087502,
            imgUrl: `img/14.jpg`
        },
        {
            id: 8,
            name: 'Kalathos, Rhodes',
            desc: 'Kalathos is a small resort village in the Rhodes Island, southeastern Greece, located in eastern part of the island, near the town of Pefki. Despite the fact that the village is not located right near the seashore (but less than 1 miles to it), there are a few very good hotels and resorts for those who do not mind traveling a few minutes to the beaches. Certainly, a few very good resorts can be found at the very seashore as well.',
            tags: ['Food', 'Family', 'Romantic'],
            lat: 36.121723,
            lng: 28.059464,
            imgUrl: `img/5.jpg`
        },
        {
            id: 9,
            name: 'Eilat',
            desc: 'Eilat is the southernmost city in the State of Israel and the only one on the shores of the Red Sea, and serves as a central port and tourist city. The city is located in the south of the Arava, and belongs to the southern district, and has 50,000 residents.',
            tags: ['Fun', 'Family', 'Romantic', 'Dance', 'Extrim'],
            lat: 32.109333,
            lng: 34.855499,
            imgUrl: `img/6.jpg`
        },
        {
            id: 10,
            name: 'Budapest',
            desc: 'Budapest is a beautiful city and the capital city of Hungary, one of the most known tourist destinations in Europe and one of the most beautiful cities there. It was formed as a union of two cities, Buda and Pest, located on the opposite shores of the Danube river. The city is primarily known for its amazing architecture, with truly unforgettable cathedrals, the building of the Parliament, numerous markets and shops, wide streets and street lights, etc.',
            tags: ['Fun', 'Family', 'Romantic', 'Dance'],
            lat: 47.497913,
            lng: 19.040236,
            imgUrl: `img/4.jpg`
        },

        ];
    return places;
}

function deletePlace(placeId) {
    var places = storageService.load(PLACES_KEY);
    var placeIdx = places.findIndex(place => place.id === placeId);
    places.splice(placeIdx, 1);
    storageService.store(PLACES_KEY, places);
    return Promise.resolve({ succes: true })
}

function savePlace(place) {
    var places = storageService.load(PLACES_KEY);
    if (place.id) {
        var placeIdx = places.findIndex(currPlace => currPlace.id === place.id);
        places.splice(placeIdx, 1, place);
    } else {
        place.id = utilService.getNextId(places);
        places.push(place);
    }
    return Promise.resolve({ succes: true });
}


function geocoding(address) {
    let key = LOCATION_KEY;

    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`)
        .then(function (res) {
            console.log('data', res.data);
            let lat = res.data.results[0].geometry.location.lat;
            let lng = res.data.results[0].geometry.location.lng;

            // setMarker(lat, lng, address);
            // mapService.addMarker({lat, lng}, address);
            return { lat, lng };
        })
        .catch(err => {
            console.log('err!!!', err);
        })
}


export default {
    getPlaces,
    generatePlaces,
    deletePlace,
    placeFilter,
    savePlace,
    geocoding
}