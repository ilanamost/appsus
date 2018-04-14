

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
            // console.log('this.filterBy.name', this.filterBy.name);
            
            if(this.filterBy.name) this.$emit('filtered',this.filterBy);
        }
    },
    template: `
            <section class="container place-filter">
                <div class="block">
                    <!-- <div > -->
                        <form class="field has-addons place-filter" @submit.stop="emitFilter">
                            <p class="control">
                                <input class="input is-small" type="text" v-model="filterBy.name" title="Search for address/ place name" placeholder="Filter By Name"/>
                            </p>
                            <p class="control">
                                <a href="" class="button is-info is-small" type="button" @click="emitFilter">Search</a>
                            </p>    
                            </form>
                    <!-- <div>     -->
                </div>
            </section>
            `
    };

