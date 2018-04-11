import home from './pages/home.js'
// import emailCompose from './pages/about.js'
// import emailDetails from './pages/about.js'

const routes = [
    {path: '/', component: home},
    // {path: '/email/compose/:emailId', component: emailCompose},
    // {path: '/email/:emailId', component: emailDetails}
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;