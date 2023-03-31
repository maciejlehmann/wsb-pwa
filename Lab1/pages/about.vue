<template>
  <div>
    <TopNav />
    <h1 class="color-red">About</h1>
  </div>
</template>

<script>
import TopNav from "../components/nav/TopNav.vue";
export default {
  name: "AboutPage",
  components: { TopNav },
};
</script>

<style scoped>
.color-red {
  color: red;
}
</style>
