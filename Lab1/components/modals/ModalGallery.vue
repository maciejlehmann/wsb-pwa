<template>
  <div class="modal-container">
    <div class="modal-body">
      <div class="modal-header">
        <div>Gallery modal</div>
        <div class="close-modal-button" @click="closeModal">
          <Icon icon="mdi:close-thick" width="36" height="36" />
        </div>
      </div>
      <div class="modal-gallery-wrapper">
        <div class="thubnails-wrapper">
          <ThumbnailImage
            v-for="image in images"
            :key="image.id"
            :image-id="image.id"
            :image-url="image.url"
            :image-alt="image.alt"
            :class="setActiveClass(image.id)"
            @setActiveImage="setImageActive"
          />
        </div>
        <div :class="setPreviousImageClass" @click="selectPreviousImage">
          <Icon icon="mdi:triangle" width="32" height="32" :rotate="3" />
        </div>
        <div class="main-image-wrapper">
          <img :src="mainImageUrl" :alt="mainImageAlt" />
        </div>
        <div :class="setNextImageClass" @click="selectNextImage">
          <Icon icon="mdi:triangle" width="32" height="32" :rotate="1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThumbnailImage from "../gallery/ThumbnailImage.vue";
import { Icon } from "@iconify/vue2";
export default {
  components: { ThumbnailImage, Icon },
  name: "ModalGallery",
  props: {
    images: {
      type: Array,
      required: true,
    },
    mainImageId: {
      type: Number,
      required: true,
    },
    mainImageUrl: {
      type: String,
      required: true,
    },
    mainImageAlt: {
      type: String,
      required: true,
    },
  },
  methods: {
    setImageActive(id) {
      this.$emit("setActiveImage", id);
    },
    setActiveClass(id) {
      return id === this.mainImageId ? "active-thumbnail" : "";
    },
    selectPreviousImage() {
      const imgId = this.mainImageId !== 1 ? this.mainImageId - 1 : 1;
      this.$emit("setActiveImage", imgId);
    },
    selectNextImage() {
      const imgId =
        this.mainImageId < this.images.length
          ? this.mainImageId + 1
          : this.images.length;
      this.$emit("setActiveImage", imgId);
    },
    closeModal() {
      this.$emit("closeModal");
    },
  },
  computed: {
    setPreviousImageClass() {
      return this.mainImageId === 1
        ? "change-image-button disabled"
        : "change-image-button";
    },
    setNextImageClass() {
      return this.mainImageId === this.images.length
        ? "change-image-button disabled"
        : "change-image-button";
    },
  },
};
</script>

<style scoped>
.modal-container {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
}

.modal-body {
  margin: 0;
  padding: 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #181818;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px rgba(100, 100, 100, 0.3);
}

.modal-header {
  margin: 0;
  padding: 0.5rem 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.75rem;
  font-family: Lato, sans-serif;
  background: #333;
  border-radius: 0.25rem 0.25rem 0 0;
}

.modal-gallery-wrapper {
  margin: 0;
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1rem;
}

.thubnails-wrapper {
  margin: 0;
  padding: 0;
  width: 20rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.main-image-wrapper {
  margin: 0;
  padding: 0;
  width: calc(100% - 27rem);
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-image-wrapper img {
  width: 100%;
  height: 100%;
}

.active-thumbnail {
  border: 0.125rem solid orange;
  border-radius: 0.25rem;
}

.change-image-button,
.close-modal-button {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.change-image-button.disabled {
  color: #555;
  pointer-events: none;
  cursor: default;
}
.change-image-button:hover {
  color: orange;
  cursor: pointer;
}

.close-modal-button:hover {
  color: orange;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
</style>
