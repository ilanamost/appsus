export default {
    template:`
    <section class="app-container home">
        <!-- <h1>Home!</h1> -->

        <main>
            <nav class="level-left">
                <div class="Home-apps">
                    <div class="block">
                        <div class="columns">
                            <div class="column is-6">
                                <img class="app-scr" src="../img/MisterEmail.png" alt="MisterEmail App">
                                <router-link class="link level-item" to="/misterEmail">misterEmail</router-link>
                            </div>
                            <div class="column is-6">
                                <img class="app-scr" src="../img/MisterMap.png" alt="MisterMap App">
                                <router-link class="link level-item" to="/misterPlace">misterPlace</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </main>

    </section>
    `
}