<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn stretch class="app-name" flat size="0.9em" :label="appName" to="/" />
        </q-toolbar-title>
        <q-btn class='desk-nav-items' stretch flat v-for="(item,index) in navbaritems" :key="index" :label="item.label" :to="item.to" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import BackToTop from 'vue-backtotop'
export default
{
  components:
  {
    BackToTop
  },
  mounted()
  {
    this.appName = process.env.APP_NAME;
  },
  data()
  {
    return {
      appName: null,
      navbaritems: [
        {
          label: 'Home',
          to: '/',
          icon: ''
        },
        {
          label: 'Products',
          to: '/products',
          icon: ''
        },

        {
          label: 'About',
          to: '/about',
          icon: ''
        },
        {
          label: 'Contact',
          to: '/contact',
          icon: ''
        },
        {
          label: 'Login',
          to: '/login',
          icon: ''
        },
        {
          label: 'Register',
          to: '/register',
          icon: ''
        },


      ]
    }
  }
};

</script>
