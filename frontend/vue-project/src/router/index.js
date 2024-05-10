import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import AdvanceFilter from '../views/AdvanceFilter.vue';
import MoreInfo from '../views/MoreInfo.vue';
import Recommendation from '../views/Recommendation.vue';
import Login from '../views/Login.vue';

// Define your routes
const routes = [
  { path: '/', component: Home }, 
  { path: '/search', component: Search }, 
  { path: '/filter', component: AdvanceFilter }, 
  { path: '/foods/:foodId', component: MoreInfo }, 
  { path: '/recommendation', component: Recommendation }, 
  { path: '/login', component: Login}, 
  // Add other routes as needed
];

// Create the router instance
const router= createRouter({
        history:createWebHistory(),
        routes,
    })
  

    export default router;