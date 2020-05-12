const routes = [
{
  path: '/',
  component: () => import('layouts/MyLayout.vue'),
  children: [
  {
    path: '',
    component: () => import('pages/Index.vue')
  }]
},
{
  path: '/about',

  component: () => import('layouts/MyLayout.vue'),
  children: [
  {
    path: '',
    name: 'about',
    component: () => import('pages/About.vue')
  }]
},
{
  path: '/contact',

  component: () => import('layouts/MyLayout.vue'),
  children: [
  {
    path: '',
    name: 'contact',
    component: () => import('pages/Contact.vue')
  }]
},
{
  path: '/products',

  component: () => import('layouts/MyLayout.vue'),
  children: [
  {
    path: '',
    name: 'products',
    component: () => import('pages/Products.vue')
  }]
},
{
  path: '/login',

  component: () => import('layouts/MyLayout.vue'),
  children: [
  {
    path: '',
    name: 'Login',
    component: () => import('pages/Login.vue')
  }]
},
{
  path: '/checkout',

  component: () => import('layouts/MyLayout.vue'),
  children: [
  {
    path: '',
    name: 'Checkout',
    component: () => import('pages/Checkout.vue')
  }]
},
{
  path: '/admin/login',

  component: () => import('layouts/MyLayout.vue'),
  children: [
  {
    path: '',
    name: 'AdminLogin',
    component: () => import('pages/AdminLogin.vue')
  }]
},
{
  path: '/register',

  component: () => import('layouts/MyLayout.vue'),
  children: [
  {
    path: '',
    name: 'register',
    component: () => import('pages/Register.vue')
  }]
},
{
  path: '/dashboard',
  component: () => import('layouts/DashboardLayout.vue'),
  children: [
  {
    path: '',
    name: 'Dashboard',
    component: () => import('pages/Dashboard.vue')
  }]
},
{
  path: '/admin/dashboard',
  component: () => import('layouts/AdminLayout.vue'),
  children: [
  {
    path: '',
    name: 'AdminDashboard',
    component: () => import('pages/AdminDashboard.vue')
  }]
},
{
  path: '/user/profile',
  component: () => import('layouts/DashboardLayout.vue'),
  children: [
  {
    path: '',
    name: 'Profile',
    component: () => import('pages/Profile.vue')
  }]
},
{
  path: '/product/:id',

  component: () => import('layouts/MyLayout.vue'),
  children: [
  {
    path: '',
    name: 'OpenProduct',
    component: () => import('pages/OpenProduct.vue')
  }]
},
{
  path: '/admin/enquiry',
  component: () => import('layouts/AdminLayout.vue'),
  children: [
  {
    path: '',
    name: 'AdminEnquiry',
    component: () => import('pages/Admin/EnquiryMain.vue')
  }]
},
{
  path: '/admin/addproduct',
  component: () => import('layouts/AdminLayout.vue'),
  children: [
  {
    path: '',
    name: 'AddProduct',
    component: () => import('components/Admin/AddProducts.vue')
  }]
}, ]

// Always leave this as last one
if (process.env.MODE !== 'ssr')
{
  routes.push(
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
