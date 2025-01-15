import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/sign-up', // Corrected path
      name: 'sign-up', // Corrected name
      component: () => import('../views/Sign-Up.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/Create.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/EditStudent.vue'),
      meta: { requiresAuth: true },
    },
  
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('authtoken');

  if (token && to.name === 'login') {
    // If the user is logged in and tries to access the login page, redirect them to the home page
    next({ name: 'home' });
  } else if (!token && to.name !== 'login' && to.name !== 'sign-up') {
    // If the user is not logged in and tries to access any page other than login or sign-up, redirect to login
    next({ name: 'login' });
  } else {
    // Allow access to the requested page
    next();
  }
});


export default router;
