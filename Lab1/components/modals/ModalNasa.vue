<template>
  <div v-if="nasaStore.modalIsShown" class="modal-container">
    <div class="modal-body">
      <div class="modal-header">
        <div>Nasa modal</div>
        <div class="close-modal-button" @click="nasaStore.closeModal">
          <Icon icon="mdi:close-thick" width="36" height="36" />
        </div>
      </div>
      <div class="modal-gallery-wrapper">
        <div class="main-image-wrapper">
          <img :src="nasaStore.imgUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue2";
import { useNasaStore } from "~/store/NasaStore";
export default {
  data() {
    return {
      nasaStore: useNasaStore(),
    };
  },
  components: { Icon },
  name: "ModalNasa",
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
    closeModal() {
      this.$emit("closeModal");
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
  justify-content: center;
  align-items: center;
}

.main-image-wrapper {
  margin: 0;
  padding: 0;
  width: 500px;
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
