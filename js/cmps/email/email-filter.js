

export default {
    created(){
        this.emitFilter();
    },
    data(){
        return {
            filterBy: {isRead:'all', fromDate: '', toDate: '',bySubject: ''}
        }
    },
    methods: {
        emitFilter(){
            console.log('Emitting Filter!');
            this.$emit('filtered',this.filterBy);
        }
    },
    template: `
        <section class="container book-filter">

            <input type="text" v-model="filterBy.bySubject" @input="emitFilter" title="By Subject" placeholder="Filter By Subject"/>
            <!-- <button class="clear-btn filter-btn" title="Filter"><i class="fas fa-filter"></i></button> -->
            <input type="date" v-model="filterBy.fromDate" @input="emitFilter" title="From Date"/>
            <input type="date" v-model="filterBy.toDate" @input="emitFilter" title="to Date"/>

            <select v-model="filterBy.isRead" @change="emitFilter" >
                <option value="read">Read</option>  
                <option value="unRead">UnRead</option>  
                <option value="all">All</option>  
            </select>

                <!-- <option type="radio" name="isRead" value="read">read<br>
                <input type="radio" name="isRead" value="unread">unread<br> -->

        </section>
            `
    };