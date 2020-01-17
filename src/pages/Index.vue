<template>
  <q-page>
    <Carosuel />
    <ProductMain />
    <WhyUs />
    <AboutUs />
    <ContactUs />
    <EnquiryForm />
  </q-page>
</template>
<script>
import Carosuel from '../components/Carosuel.vue'
import ProductMain from '../components/ProductMain.vue'
import ContactUs from '../components/ContactUs.vue'
import AboutUs from '../components/AboutUs.vue'
import WhyUs from '../components/WhyUs.vue'
import EnquiryForm from '../components/EnquiryForm.vue'
export default
{
  name: 'PageIndex',
  components:
  {
    Carosuel,
    AboutUs,
    ContactUs,
    WhyUs,
    ProductMain,
    EnquiryForm
  }
};

</script>
