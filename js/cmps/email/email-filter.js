// export default {
//     created(){
//         this.emitFilter();
//     },
//     data(){
//         return {
//             filterBy: {isRead:'', date: '', subject: ''}
//         }
//     },
//     methods: {
//         emitFilter(){
//             console.log('Emitting Filter!');
//             this.$emit('filtered',this.filterBy);
//         }
//     },
//     template: `
//         <section class="container book-filter">
//             <button class="clear-btn filter-btn">Filter</button>
//             <label>
//                 By Subject
//                 <input type="text" v-model="filterBy.byName" @input="emitFilter" />
//             </label> 
//             <label>
//                 From price
//                 <input type="number" v-model="filterBy.fromPrice" @input="emitFilter" />
//             </label> 
//             <label>
//                 To Price
//                 <input type="number" v-model="filterBy.toPrice" @input="emitFilter" />
//             </label> 
//         </section>
//             `
//     };