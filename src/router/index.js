import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '@/pages/About';
import MyWork from '@/pages/MyWork';
import Contact from '@/pages/Contact';
import PageNotFound from '@/pages/PageNotFound';

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
  },
  {
    path: '*',
    // name: 'PageNotFound',
    component: PageNotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
