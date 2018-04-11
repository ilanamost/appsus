import home from './pages/home.js'
import about from './pages/about.js'
import misterEmail from './pages/email/email-app.js'
import misterPlace from './pages/place/place-app.js'
// import misterKeeper from '../apps/misterKeeper/js/pages/home.js'


const routes = [
    {path: '/', component: home},
    {path: '/about', component: about},
    {path: '/misterEmail', component: misterEmail},
    {path: '/misterPlace', component: misterPlace},
    // {path: '/misterKeeper', component: misterKeeper}
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;