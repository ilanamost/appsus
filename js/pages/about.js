import eventBus, {USR_MSG_DISPLAY} from '../services/event-bus.service.js'
import toggleBtn from '../cmps/toggle-btn.js'

export default {
    template:`
    <section class="about app-container">
        <!-- <h1>About {{greet}}</h1>
        Happy? {{isHappy}}
        <br/><br/><br/>  -->
        <!-- <toggle-btn v-model="isHappy"></toggle-btn> -->
        <div class="block">
            <div class="columns">
                <div class="column is-8">
                    <div class="about">
                        <p>So What happens when 2 Russian girls have to work on one big project?</p>
                        <p> Each one is comming from very different proffecional background but when we need to work together, girlpower wins!!!</p>
                        <p>You are more than welcome to reach us directly:></p>
                        <p>Nora Marcelli: <i class="fas fa-envelope"></i> noramarcelli@gmail.com</p>
                        <p>Ilana Mostovski: <i class="fas fa-envelope"></i> ilana.mostovski@gmail.com</p>
                        <p>Dosvidanie! <i class="far fa-smile"></i></p>
                        
                    </div>
                </div>
                <div class="column is-4">
                    <img class="img-about" src="./img/us.jpg" alt="Mountain View">
                    <button class="button is-info" @click="goHome"><i class="fas fa-home"></i></button>
                </div>
            </div>
        </div>
        <footer class="footer-home">
        </footer>
        </section>
    `,
    data() {
        return {
            isHappy: false, 
            greet: this.$route.params.greet
        }
    },
    methods: {
        goHome() {
            eventBus.$emit(USR_MSG_DISPLAY, {txt:'Going Home...',type:'success'});
            this.$router.push('/')
        }
    },
    components: {
        toggleBtn
    }
    
}