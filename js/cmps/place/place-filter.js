

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
        // emitFilter: _.debounce(function (e) {
        //     if(this.filterBy.name) this.$emit('filtered',this.filterBy);
        // }, 500),

        emitFilter(){
            if(this.filterBy.name) this.$emit('filtered',this.filterBy);
        }
    },
    template: `
            <section class="container place-filter">
                <form  @submit.stop="emitFilter">
                <input type="text" v-model="filterBy.name" title="Search for address/ place name" placeholder="Filter By Name"/>
                <button type="button" @click="emitFilter">Search</button>
               </form>
            </section>
            `
    };
