<template>
  <q-btn dense style="background: #FF0080; color: white" round icon="shopping_cart">
    <q-menu>
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <q-list style="max-height: 200px;min-width: auto;">
            <q-item clickable v-for="(item,index) in card_items" :key="index">
              <q-item-section>
                {{item.name}}
              </q-item-section>
              <q-item-section side>
                <q-item-label>A$ - {{item.price}}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <q-separator vertical inset class="q-ma-lg" />
        <div class="column items-center">
          <div class="text-subtitle1 text-grey q-mt-md q-mb-xs">Total </div>
          <div class="text-h5">A$</div>
          <div class="text-h5">{{cart_total}}</div>
          <q-btn class="mtt-20" color="primary" label="Checkout" push size="md" @click="checkOutCart()" />
        </div>
      </div>
    </q-menu>
    <q-badge color="dark" floating>{{cart_length}}</q-badge>
  </q-btn>
</template>
<script>
import
{
  mapGetters,
  mapActions,
  mapMutations
}
from 'vuex'
export default
{
  name: 'CardButton',

  data()
  {
    return {}
  },
  computed:
  {
    ...mapGetters(
    {
      card_items: "global/getCartItems",
      cart_length: "global/getCartCount",
      cart_total: "global/getProductTotal"
    })

  },
  mounted()
  {
    console.log(this.card_items);
  },
  methods:
  {
    getCardItems: function() {

    },
    checkOutCart: function()
    {
      alert('available on future release')
    }
  }
}

</script>
