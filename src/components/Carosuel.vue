<template>
  <div >
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="90vh"
      infinite
      autoplay
    >
      <q-carousel-slide name="first" img-src="/statics/doctor.jpg">
        <!--<div class="absolute-bottom custom-caption">
          <div class="text-h2">First image</div>
          <div class="text-subtitle1"></div>
        </div>-->
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="/statics/doctor1.jpg">
        <!--<div class="absolute-bottom custom-caption">
          <div class="text-h2"></div>
          <div class="text-subtitle1"></div>
        </div>-->
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <!--<div class="absolute-bottom custom-caption">
          <div class="text-h2">Third image</div>
          <div class="text-subtitle1">Desc 3</div>
        </div>-->
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 'first'
    }
  }
}
</script>