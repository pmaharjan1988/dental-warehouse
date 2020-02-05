<template>
  <q-page padding>
    <div class="row">
      <div class="col-6">
        <CheckoutItems />
      </div>
      <div class="col-6 q-pa-md">
        <q-card class="q-pa-md card-top-border">
          <div class="q-pa-md">
            <div class="text-h5">Deliever to this address</div>
            <q-separator class="mtt-20 mbb-20" inset color="primary" />
            <div class="q-pa-md">
              <div class="text-h6 text-primary">Name : {{address_form.name}}</div>
              <div class="text-h6">Mobile : {{address_form.mobile}}</div>
              <div class="text-h6">Adddress : {{address_form.address}}</div>
              <div class="text-h6">Landmark : {{address_form.landmark}}</div>
              <div class="text-h6">PostalCode : {{address_form.postalcode}}</div>
            </div>
          </div>
        </q-card>
        <div class="row full-width justify-end mtt-10">
          <q-btn color="primary" align="right" to="/payment" size="1em">Pay Now</q-btn>
        </div>
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
  firebaseStorage,
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
  data()
  {
    return {
      address_form:
      {
        name: null,
        mobile: null,
        address: null,
        uid: null,
        postal: null,
        landmark: null
      },
      address_data: null,
      address_id: null,
      loginStatus: false

    }
  },
  components:
  {
    CheckoutItems,
  },
  mounted()
  {
    this.initCheckLogin();
    this.initSummary();
  },
  computed:
  {
    ...mapGetters(
    {
      cart_total: "global/getProductTotal",
      cart_length: "global/getCartCount",
      user: "global/user"
    })
  },
  methods:
  {
    async initSummary()
    {
      var user = firebaseAuth.currentUser;
      if (user)
      {
        let uid = user.uid;
        console.log(this.address_form)
        let address = await firebaseStorage.collection('address');
        let userAddress = address.where('uid', '==', uid).get()
          .then(snapshot =>
          {
            if (snapshot.empty)
            {
              console.log('No matching documents.');
              return;
            }

            snapshot.forEach(doc =>
            {
              this.address_id = doc.id;
              this.address_data = doc.data();
              let address_data = doc.data();
              this.address_form.name = address_data.name;
              this.address_form.mobile = address_data.mobile;
              this.address_form.address = address_data.address;
              this.address_form.landmark = address_data.landmark;
              this.address_form.postalcode = address_data.postalcode;

              this.$store.commit('global/SET_ADDRESS', address_data);


            });
          })
          .catch(err =>
          {
            Notify.create(
            {
              message: 'Error in loading adddresses',
              color: 'red'
            })
          });
      }
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
