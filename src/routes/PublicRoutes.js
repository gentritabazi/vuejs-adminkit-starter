// Import Modules
const error404Module = () => import('@/modules/Error404');
const loginModule = () => import('@/modules/Login');

// Export
export default [
  // Default route
  {
    path: '/',
    redirect: '/admin/dashboard',
  },

  // Error 404
  {
    path: '*',
    component: error404Module,
    name: 'error-404',
  },

  // Login
  {
    path: '/login',
    component: loginModule,
    name: 'login',
    meta: { guest: true },
  },
];
