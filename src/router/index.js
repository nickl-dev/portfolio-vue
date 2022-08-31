import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../pages/About.vue';
import Development from '../pages/Development.vue';
import Contact from '../pages/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/development',
    name: 'Development',
    component: Development
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
