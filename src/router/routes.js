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
    name: 'login',
    component: () => import('pages/Login.vue')
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
