<template>
  <div>
    <TopNav />
    <GalleryComponent />
  </div>
</template>

<script>
import TopNav from "../components/nav/TopNav.vue";
import GalleryComponent from "../components/GalleryComponent.vue";
export default {
  name: "GalleryPage",
  components: { TopNav, GalleryComponent },
};
</script>

<style scoped></style>
