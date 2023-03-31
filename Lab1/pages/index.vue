<template>
  <div class="body">
    <TopNav />
    <h1 id="jeden">Strona domowa</h1>
  </div>
</template>

<script>
import TopNav from "../components/nav/TopNav.vue";
export default {
  name: "IndexPage",
  components: { TopNav },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background: #181818;
  color: rgba(255, 255, 255, 0.87);
}
</style>
