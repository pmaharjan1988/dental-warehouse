<template>
  <q-page padding>
    <q-btn color="primary" align="right" @click="doPayment()" size="1em">Pay</q-btn>
  </q-page>
</template>
<script>
import
{
  mapGetters,
  mapActions,
  mapMutations
}
from 'vuex'
import
{
  firebaseStorage,
  firebaseAuth
}
from 'boot/firebase'
import
{
  Notify
}
from 'quasar'
export default
{
  data()
  {
    return {
      uid: null,
    }
  },
  mounted()
  {
    var user = firebaseAuth.currentUser;
    if (user)
    {
      this.uid = user.uid;
    }
  },
  computed()
  {
    /*...mapGetters(
    {
      cart_items: "global/getCartItems",
      cart_length: "global/getCartCount",
      cart_total: "global/getProductTotal",
      address: "global/getAddress"
    })*/
  },
  methods:
  {
    doPayment: function() {

    }
  }
}

</script>
