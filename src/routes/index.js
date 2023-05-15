// Import
import Vue from 'vue';
import VueRouter from 'vue-router';
import privateRoutes from './PrivateRoutes.js';
import publicRoutes from './PublicRoutes.js';
import store from '@/store';

// Use Vue Router
Vue.use(VueRouter);

// Start Vue Router
const router = new VueRouter({
  mode: 'history',
  routes: [...privateRoutes, ...publicRoutes],
});

// Middlewares
router.beforeEach((to, from, next) => {
  // Redirect to route
  let redirectToRoute = function (name) {
    if (name === from.name) {
      next();
      return;
    }

    next({ name: name });
  };

  // Get logged user
  let loggedUser = store.getters.getLoggedUser;

  // Check if access token expired
  if (loggedUser) {
    let currentDateTime = new Date().getTime();
    if (currentDateTime > loggedUser.expiryDate) {
      store.dispatch('logOut');
      return redirectToRoute('login');
    }
  }

  // Role
  if (to.meta.roles) {
    if (loggedUser) {
      if (to.meta.roles.includes(loggedUser.role)) return next();
      else return redirectToRoute('error-404');
    } else {
      return redirectToRoute('login');
    }
  }

  // Auth
  if (to.meta.auth) {
    if (loggedUser) return next();
    else return redirectToRoute('login');
  }

  // Guest
  if (to.meta.guest) {
    if (loggedUser) return redirectToRoute('admin.dashboard');
    else return next();
  }

  next();
});

// Export
export default router;
