

export default {
    created(){
        this.emitFilter();
    },
    data(){
        return {
            selected:[],
            filterBy: {name:''},
        }
    },
    methods: {
        // emitFilter(){
        //     console.log('Emitting Filter!');
        //     if(this.filterBy.name) this.$emit('filtered',this.filterBy);
        // },

        emitFilter: _.debounce(function (e) {
            // this.bookName = e.target.value;
            if(this.filterBy.name) this.$emit('filtered',this.filterBy);
            // console.log('this.bookName', this.bookName);
            // if (this.bookName) {
            //     bookService.queryGoogleBooks(this.bookName)
            //     .then(googleBooks => {
            //         this.googleBooks = googleBooks;
            //     })
            // }
        }, 500),
    },
    template: `
            <section class="container place-filter">
                <input type="text" v-model="filterBy.name" @input="emitFilter" title="Search for address/ place name" placeholder="Filter By Name"/>
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