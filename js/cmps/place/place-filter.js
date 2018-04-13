

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
            <div class="block">
                <input class="input is-small" type="text" v-model="filterBy.name" @input="emitFilter" title="Search for address/ place name" placeholder="Filter By Name"/>
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
            </div>
            </section>
            `
    };
