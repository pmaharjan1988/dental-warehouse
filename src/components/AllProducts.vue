<template>
  <q-page padding>
    <div class="row mtt-20">
      <div class="col-md-4 col-sm-4 col-xs-12 q-pa-lg" style="margin:0 auto;" v-for="(item,index) in products_data" :key="index">
        <q-card bordered class="shadow-20 flex" style="width: 100%;height:100%">
          <img v-img:spimg :src="item.thumb_img" style="width: 100%;height:200px;margin-bottom:0 !important" :alt="item.name">
          <q-card-section class="q-pt-md w-100">
            <div class="text-h6">{{item.name}}</div>
            <div class="text-caption text-grey" v-html="item.desc.substr(0,12)"></div>
            <div class="text-h5 text-bold text-right">
              A$ {{item.price}}
            </div>
          </q-card-section>
          <div class=" full-width row justify-end mtt-10 mbb-10" style="border-top: 1px solid grey">
            <q-btn class="mtt-10" flat round icon=" shopping_cart" color="primary" />
            <q-btn class="mtt-10" flat color="primary" @click="addToCart(item)">
              Add to Cart
            </q-btn>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import
{
  firebaseStorage
}
from 'boot/firebase'
import
{
  mapGetters,
  mapActions,
  mapMutations
}
from 'vuex'
export default
{
  data()
  {
    return {
      products_data: []
    }
  },
  mounted()
  {
    this.initProducts();
  },
  methods:
  {

    initProducts: function()
    {

      let productCollection = firebaseStorage.collection('products').get()
        .then(querySnapshot =>
        {
          this.products_data = querySnapshot.docs.map(doc => doc.data());
          this.products_data = this.products_data.sort((a, b) => parseFloat(a.order) - parseFloat(b.order));
        })
        .catch(err =>
        {
          this.pageLoader = false;
        });
    },
    openProduct: function(id)
    {
      this.$router.push(
      {
        name: 'OpenProduct',
        params:
        {
          id: id
        }
      })

    },
    addToCart: function(item)
    {

      let productId = item.id;
      let productName = item.name;
      let productPrice = parseFloat(item.price);

      let productItem = {
        'id': productId,
        'name': productName,
        'price': productPrice
      };

      this.$store.commit('global/SET_TO_CART', productItem);


    }
  }

};

</script>
