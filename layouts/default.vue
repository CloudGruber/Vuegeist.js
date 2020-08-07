<template>
  <v-app>
    <navbar/>
    <nuxt/>
  </v-app>
</template>

<script>
import navbar from "~/layouts/navbar.vue";
export default {
  components: {
    navbar
  }
};
</script>
