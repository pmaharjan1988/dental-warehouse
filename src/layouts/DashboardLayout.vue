<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />
        <q-toolbar-title>
          <q-btn stretch class="app-name" flat size="0.9em" :label="appName" to="/" />
        </q-toolbar-title>
        <!-- <CartButton /> -->
        <q-btn stretch flat label="LogOut" @click="logout()" />
      </q-toolbar>
    </q-header>
    <q-drawer show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import
{
  firebaseAuth
}
from 'boot/firebase'
import
{
  mapGetters
}
from "vuex";
import BackToTop from 'vue-backtotop'
import CartButton from '../components/CartButton.vue'

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
  data()
  {
    return {
      left: false,
      appName: null,
      storageUser: null,
    }
  },
  computed:
  {
    ...mapGetters(
    {
      user: "global/user"
    })
  },
  mounted()
  {
    this.appName = process.env.APP_NAME;
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
      if (this.storageUser == false)
      {
        Notify.create(
        {
          message: 'You are logged out. Please login.',
          color: 'red'
        });

        this.$router.push(
        {
          name: 'Login',
        })
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
