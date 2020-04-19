<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn stretch class="app-name" flat size="0.9em" :label="appName" to="/" />
        </q-toolbar-title>
        <NavBarItems />
        <CartButton />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal elevated class="bg-white">
      <div class="row d-flex justify-between">
        <div class="bg-primary q-pa-md text-center text-white">All Rights Reserved - {{ appName }}</div>
        <div class="mrr-40 mt-10">
          <q-icon
            class="text-primary q-pl-md q-ma-sm cursor-pointer"
            v-for="(item, index) in socialIcons"
            :key="index"
            size="20px"
            :name="item.icon"
            @click="openSocialLinks(item.link)"
          ></q-icon>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import BackToTop from "vue-backtotop";
import CartButton from "../components/CartButton.vue";
import NavBarItems from "../components/NavBarItems.vue";
import { mapGetters } from "vuex";
import { firebaseAuth } from "boot/firebase";

export default {
  components: {
    BackToTop,
    CartButton,
    NavBarItems
  },
  mounted() {
    this.appName = process.env.APP_NAME;
  },
  data() {
    return {
      appName: null,
      socialIcons: [
        {
          icon: "fab fa-facebook-square",
          link: "https://facebook.com"
        },
        {
          icon: "fab fa-instagram",
          link: "https://facebook.com"
        },
        {
          icon: "fab fa-twitter",
          link: "https://facebook.com"
        }
      ]
    };
  },
  methods: {
    openSocialLinks: function(link) {
      window.open(link, "_blank");
    }
  }
};
</script>
