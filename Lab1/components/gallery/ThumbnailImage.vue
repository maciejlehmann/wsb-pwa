<template>
  <div class="thumbnail">
    <img :src="imageUrl" :alt="imageAlt" @click="setImageActive(imageId)" />
  </div>
</template>

<script>
export default {
  name: "ThumbnailImage",
  emits: ["setActiveImage"],
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
  methods: {
    setImageActive(id) {
      this.$emit("setActiveImage", id);
    },
  },
};
</script>

<style scoped>
.thumbnail {
  display: inline-block;
  width: 150px;
  overflow: hidden;
}

.thumbnail img {
  max-width: 100%;
  transition: transform 0.5s ease;
}

.thumbnail img:hover {
  transform: scale(1.3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
