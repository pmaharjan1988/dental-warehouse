<template>
  <q-page padding>
  	<div class="row mtt-20">
    <div class="col-md-4 col-sm-4 col-xs-12 q-pa-lg" style="margin:0 auto;" v-for="(item,index) in sliderItems" :key="index">
    <q-card bordered dark class="shadow-20 flex" style="width: 100%;height:100%">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" style="width: 100%;height:200px;margin-bottom:0 !important" >
        <div class="absolute-bottom">
          <div class="text-h6">Product {{index+1}}</div>
          <div class="text-subtitle2">Description {{index+1}}</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
    </div>
</div>
  </q-page>
</template>

<script>
export default {
  data () {
   return {
   		sliderItems: null,
   }
},
 mounted(){
 	this.initProducts();
 },
 methods:
	{
		initProducts: function()
		{
			let sliderProducts = [];
			for(var i=0;i<10;i++)
			{
				let counter = i+1;
				sliderProducts[i] = {
		          'id': counter,
		          'name': 'Product '+ counter,
		          'style': "display:flex;background-image:url('/statics/road.jpg');width: 23.5%;margin-right: 2%",
		        }
			}
			this.sliderItems = sliderProducts;
		}
	}
}
</script>
