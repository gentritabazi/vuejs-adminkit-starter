// Import Modules
const dashboardModule = () => import('@/modules/Dashboard');
const pageExampleModule = () => import('@/modules/PageExample');

// Export
export default [
  // Dashboard
  {
    path: '/admin/dashboard',
    component: dashboardModule,
    // meta: { auth: true },
    name: 'admin.dashboard',
  },

  // Page Example
  {
    path: '/admin/page-example',
    component: pageExampleModule,
    // meta: { auth: true },
    name: 'admin.page.example',
  },
];
