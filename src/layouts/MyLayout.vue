<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn stretch class="app-name" flat size="0.9em" :label="appName" to="/" />
        </q-toolbar-title>
        <div v-if="!loginStatus">
          <q-btn class='desk-nav-items' stretch flat v-for="(item,index) in navbaritems" :key="index" :label="item.label" :to="item.to" />
          <q-btn class='mob-nav-items' icon="fas fa-bars">
            <q-menu transition-show="flip-right" transition-hide="flip-left">
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup v-for="(item,index) in navbaritems" :key="index">
                  <q-item-section>
                    <q-btn stretch flat :label="item.label" :to="item.to" color="primary" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
        <div v-else>
          <q-btn stretch flat label="Dashboard" to="/dashboard" />
          <q-btn stretch flat label="LogOut" @click="logout()" />
        </div>
        <!--<CartButton />-->
      </q-toolbar>
    </q-header>
    <q-footer reveal :reveal-offset="10" elevated class="bg-white text-primary text-center text-body2">
      All Rights Reserved - {{ appName }}
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import BackToTop from 'vue-backtotop'
import CartButton from '../components/CartButton.vue'
import
{
  mapGetters,
}
from 'vuex'
import
{
  firebaseAuth
}
from 'boot/firebase'
import
{
  LocalStorage,
  Notify,
}
from 'quasar'

export default
{
  components:
  {
    BackToTop,
    CartButton
  },
  mounted()
  {
    this.appName = process.env.APP_NAME;
  },
  data()
  {
    return {
      appName: null,
      loginStatus: false,
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
  },
  created()
  {
    this.initCheckLogin();
  },
  methods:
  {
    initCheckLogin: function()
    {

      let x = this.$store.dispatch('global/checkUserState');
      this.storageUser = LocalStorage.getItem('STORAGEUSER');
      console.log(this.storageUser)

      if (this.storageUser == false)
      {
        this.loginStatus = false;
      }
      else
      {
        this.loginStatus = true;
      }
    },
    logout()
    {
      LocalStorage.remove('STORAGEUSER');
      firebaseAuth
        .signOut()
        .then(() =>
        {

          this.$router.replace(
          {
            name: "Login"
          });
        });
    }
  }
};

</script>
