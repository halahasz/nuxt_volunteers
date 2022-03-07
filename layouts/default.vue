<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script lang="ts">
import Header from "../components/Header.vue";
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  components: {
    Header,
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap&subset=latin-ext");

*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
  background-color: #f7f7f7;
}
</style>
