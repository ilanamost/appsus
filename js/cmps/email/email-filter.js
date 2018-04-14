

export default {
    created(){
        this.emitFilter();
    },
    data(){
        return {
            filterBy: {isRead: 'all', fromDate: '', toDate: '',bySubject: ''}
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
            <div class="block">
                <input class="input is-small subject" type="text" v-model="filterBy.bySubject" @input="emitFilter" title="By Subject" placeholder="Filter By Subject"/>
                <!-- <button class="clear-btn filter-btn" title="Filter"><i class="fas fa-filter"></i></button> -->
                <input class="input is-small date textbox-n" type="text" onfocus="(this.type='date')" id="date" v-model="filterBy.fromDate" @input="emitFilter" title="From Date"  placeholder="From.."/>
                <input class="input is-small date textbox-n" type="text" onfocus="(this.type='date')" id="date" v-model="filterBy.toDate" @input="emitFilter" title="to Date" placeholder="To.."/>

                <span class="select is-small isRead">
                    <select v-model="filterBy.isRead" @change="emitFilter" >
                        <option value="read">Read</option>  
                        <option value="unRead">UnRead</option>  
                        <option value="all">All</option>  
                    </select>
                    <span>{{ unRead }}</span>
                </span>
                    <!-- <option type="radio" name="isRead" value="read">read<br>
                    <input type="radio" name="isRead" value="unread">unread<br> -->
            </div>
        </section>
            `
    };