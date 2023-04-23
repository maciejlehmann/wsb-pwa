import { defineStore } from "pinia";

export const useNasaStore = defineStore("nasaStore", {
  state: () => {
    return {
      modalIsShown: false,
      imgUrl: "",
    };
  },
  actions: {
    openModal(imageUrl) {
      this.modalIsShown = true;
      this.imgUrl = imageUrl;
    },
    closeModal() {
      this.modalIsShown = false;
      this.imgUrl = "";
    },
  },
});
