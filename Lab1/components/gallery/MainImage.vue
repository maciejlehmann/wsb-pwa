<template>
  <div class="main-image">
    <img :src="imageUrl" :alt="imageAlt" />
  </div>
</template>

<script>
export default {
  name: "MainImage",
  props: {
    imageId: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.main-image {
  overflow: hidden;
}
.main-image img {
  width: 100%;
  transition: transform 0.5s ease;
}

.main-image img:hover {
  transform: scale(1.3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
