<template>
  <img :src="imageUrl" :alt="imageAlt" @click="setImageActive(imageId)" />
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
