import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../pages/About.vue';
import MyWork from '../pages/MyWork.vue';
import Contact from '../pages/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/my-work',
    name: 'MyWork',
    component: MyWork
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
