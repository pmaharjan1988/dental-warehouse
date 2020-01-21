<template>
  <q-page padding>
    <div class="row">
      <div class="col-6 q-pa-md">
        <div v-if="!loginStatus">
          <div class="q-pa-md row full-width justify-center">
            <div class="text-h4  text-negative">You are not Logged In</div>
          </div>
          <div class="q-pa-md row full-width justify-center">
            <q-btn color="primary" @click="checkoutLogin()" size="lg">Login</q-btn>
          </div>
        </div>
        <div v-else>
          <div class="q-pa-md row full-width justify-center">
            <div class="q-pa-md row full-width justify-center">
              <div class="text-h4  text-positive">You are logged in</div>
            </div>
            <q-btn color="primary" to="/" size="lg">Proceed</q-btn>
          </div>
        </div>
      </div>
      <div class="col-6">
        <CheckoutItems />
      </div>
    </div>
  </q-page>
</template>
<script>
import CheckoutItems from '../components/CheckoutItems.vue'
import
{
  mapGetters,
}
from 'vuex'

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
    CheckoutItems,
  },
  mounted()
  {
    this.initCheckLogin();
  },
  data()
  {
    return {
      loginStatus: false
    }
  },
  methods:
  {
    checkoutLogin: function()
    {

      this.$store.commit('global/SET_LOGGIN_NAVIGATION', 'FROM_CHECKOUT');
      this.$router.replace(
      {
        name: "Login"
      });



    },
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
  }
}

</script>
