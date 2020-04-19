<template>
  <q-page class>
    <div style="height:400px;">
      <div v-if="!paidFor">
        <h1>{{product.price}}</h1>
        <h6>{{product.description}}</h6>
      </div>
      <div ref="paypal"></div>
    </div>

    <ContactUs />
  </q-page>
</template>

<script>
import ContactUs from "../components/ContactUs.vue";
export default {
  name: "Contact",
  components: {
    ContactUs
  },
  data() {
    return {
      loaded: false,
      paidFor: false,
      product: {
        price: 3,
        description: "test pro"
      }
    };
  },
  mounted() {
    /*const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AWk-u8DTn7z3MWUHIy3UeEQJCLt3gD4ED5sd__dIXi7Dl9_nQVvxmNUJTXf9ARkthJnC9iJBMQGQMeid";

    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
    console.log("mounted -> script", this.$refs);*/
    // this.setLoaded();
  },
  methods: {
    setLoaded: function() {
      this.loaded = true;
      console.log("this.loaded", this.loaded);
      console.log("paypal_sdk", paypal_sdk);

      paypal_sdk
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    value: this.product.price,
                    currency_code: "AUD"
                  }
                }
              ]
            });
          },
          onApprove: (data, actions) => {
            actions.order.capture().then(function(details) {
              console.log(JSON.stringify(details));
            });
          },
          onCancel: function(data, action) {
            return actions.payment.execute().then(function() {
              console.log(actions);
              //actions.redirect();
            });
          },
          onError: function(error) {
            window.alert(error);
          }
        })
        .render(this.$refs.paypal);
    }
  }
};
</script>
