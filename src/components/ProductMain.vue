<template>
<div>
	<div class="q-pa-xl">
		<div class="q-pa-md text-center text-h2">
			Products
		</div>
		<div class=" text-center text-grey text-body1">
			Select from our large number of products
		</div>
	<div style="width:100%;margin:20px auto;height:400px">
	   <!-- Using the slider component -->
	   <slider ref="slider" :options="options">
	       <!-- slideritem wrapped package with the components you need -->
	       <slideritem v-for="(item,index) in sliderItems" :key="index" :style="item.style">{{item.name}}</slideritem>
	       <!-- Customizable loading -->
	       <div slot="loading">loading...</div>
	   </slider>
	</div>
	</div>
</div>
</template>
<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
export default {
data () {
   return {
     options: {
      currentPage: 0,
        infinite: 1,
        loop: true,
        loopedSlides: 1,
        autoplay: 4000,
     },
     sliderItems:null,
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
		          'style': "display:flex;background-image:url('/statics/road.jpg');width: 50%;margin-right: 2%",
		        }
			}
			this.sliderItems = sliderProducts;
		}
	},
 components: {
   slider,
   slideritem
 }
}
</script>