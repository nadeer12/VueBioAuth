// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/RegisterForm.vue';
import Login from '../views/LoginForm.vue';
import Home from '@/views/HomeForm.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/',
    redirect: '/register'
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
