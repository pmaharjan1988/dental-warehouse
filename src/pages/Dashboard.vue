<template>
  <q-page padding>
    User Dashboard
    <div>
    	<AllProducts/>
    </div>
  </q-page>
</template>
<script>
import AllProducts from '../components/AllProducts.vue'
export default
{
  name: 'Dashboard',
  components:
  {
    AllProducts
  }
};
</script>
