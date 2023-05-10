import { createApp } from 'vue'
import App from './App.vue'
// import 'bootstrap';
// import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

import {createRouter, createWebHistory} from 'vue-router'

import cardsComponent from './components/cards.vue';
import errorComponent from './components/error.vue';
import cardDetails from './components/cardDetails.vue';
import addCard from './components/addCard.vue';
import editCard from './components/editCard.vue';

const routes = [
    {
        path: '/',
        component: cardsComponent,
        alias: '/cards'
    },

    {
        path: '/cards/:id',
        component: cardDetails,
    },

    {
        path: '/add',
        component: addCard,
    },

    {
        path: '/edit/:id',
        component: editCard,
    },

    {
        path: '/:NotFound(.*)*',
        component: errorComponent,
        meta: {
            hideNavbar: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'my-active-link-class'
})

createApp(App).use(router).mount('#app');