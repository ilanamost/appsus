

export default {
    created(){
        this.emitFilter();
    },
    data(){
        return {
            selected:[],
            filterBy: {name:'', tag: this.selected},
        }
    },
    methods: {
        emitFilter(){
            console.log('Emitting Filter!');
            this.$emit('filtered',this.filterBy);
        }
    },
    template: `
            <section class="container place-filter">
                <input type="text" v-model="filterBy.name" @input="emitFilter" title="Search for address/ place name" placeholder="Filter By Name"/>
                <!-- <button class="clear-btn filter-btn" title="Filter"><i class="fas fa-filter"></i></button> -->
                <!-- <select v-model="selected" @change="emitFilter" multiple="multiple">
                    <option value="Fun">Fun</option>  
                    <option value="Food">Food</option>  
                    <option value="Work">Work</option>  
                    <option value="Romantic">Romantic</option>  
                    <option value="Music">Music</option>  
                    <option value="Dance">Dance</option>  
                    <option value="Extrim">Extrim</option>  
                    <option value="Family">Family</option>  
                    <option value="Children">Children</option>  
                </select> -->
            </section>
            `
    };

    // document.querySelector('form')
    // .addEventListener('submit', (ev) => {
    //     ev.preventDefault();
    //     var address = document.querySelector('input').value;
    //     convertToCoords(address);
    //     renderAddress(address);
    // })


    
// function convertToCoords(strURL) {
//     // console.log(address);
//     let address = document.querySelector('input').value;
//     let addressToCopy = document.querySelector('.searched-address').innerText;
//     //    renderAddress(address);

//     if (address) {
//         return geocoding(address).then(function (coords) {
//             if (strURL) {
//                 console.log('coords', coords);
//                 strURL += '?lat=' + coords.lat + '&lng=' + coords.lng;
//                 console.log('strURL', strURL);

//                 return coords;
//             }
//         })
//     } else {
//         return geocoding(addressToCopy).then(function (coords) {
//             if (strURL) {
//                 console.log('coords', coords);
//                 strURL += '?lat=' + coords.lat + '&lng=' + coords.lng;
//                 console.log('strURL', strURL);
//                 // return coords;
//             }
//         });
//     }
// }

// function renderAddress(address) {
//     document.querySelector('.searched-address').innerText = address;
// }