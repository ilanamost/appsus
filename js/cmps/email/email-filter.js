

export default {
    created(){
        this.emitFilter();
    },
    data(){
        return {
            filterBy: {isRead:'', fromDate: '', toDate: '',bySubject: ''}
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
            <button class="clear-btn filter-btn">Filter</button>
            <div class="control">
                <label>
                    By Subject
                    <input type="text" v-model="filterBy.bySubject" @input="emitFilter" />
                </label> 
            </div>
            <label>
                from Date
                <input type="date" v-model="filterBy.fromDate" @input="emitFilter" />
            </label> 
            <label>
                to Date
                <input type="date" v-model="filterBy.toDate" @input="emitFilter" />
            </label> 
            <form action="">
                <input type="radio" name="isRead" value="read">read<br>
                <input type="radio" name="isRead" value="unread">unread<br>
            </form>

        </section>
            `
    };