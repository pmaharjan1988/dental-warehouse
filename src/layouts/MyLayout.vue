<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn stretch class="app-name" flat size="0.9em" :label="appName" to="/" />
        </q-toolbar-title>
        <NavBarItems />
        <CartButton />
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
import NavBarItems from '../components/NavBarItems.vue'
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

export default
{
  components:
  {
    BackToTop,
    CartButton,
    NavBarItems
  },
  mounted()
  {
    this.appName = process.env.APP_NAME;
  },
  data()
  {
    return {
      appName: null,
    }
  },
};

</script>
