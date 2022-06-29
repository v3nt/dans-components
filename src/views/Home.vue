<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <DanMan msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import DanMan from "@/components/DanMan.vue";

export default {
  name: "Home",
  components: {
    DanMan,
  },
};
</script>
