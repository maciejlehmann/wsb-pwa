<template>
  <div class="gallery-container">
    <div class="gallery-wrapper">
      <MainImage
        :image-id="activeImageId"
        :image-url="mainImageUrl"
        :image-alt="mainImageAlt"
        @click.native="showModal"
      />
      <div class="thumbnails">
        <ThumbnailImage
          v-for="image in images"
          :key="image.id"
          :image-id="image.id"
          :image-url="image.url"
          :image-alt="image.alt"
          @setActiveImage="setActiveImage"
        />
      </div>
    </div>
    <ModalGallery
      v-if="isModalShown"
      :images="images"
      :main-image-id="activeImageId"
      :main-image-url="mainImageUrl"
      :main-image-alt="mainImageAlt"
      @setActiveImage="setActiveImage"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import ThumbnailImage from "./gallery/ThumbnailImage.vue";
import MainImage from "./gallery/MainImage.vue";
import ModalGallery from "./modals/ModalGallery.vue";
export default {
  components: { ThumbnailImage, MainImage, ModalGallery },
  data() {
    return {
      isModalShown: false,
      activeImageId: 1,
      images: [
        {
          id: 1,
          url: "https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_960_720.jpg",
          alt: "Description of the image 1",
        },
        {
          id: 2,
          url: "https://cdn.pixabay.com/photo/2014/05/22/16/52/pyrenees-351266_960_720.jpg",
          alt: "Description of the image 2",
        },
        {
          id: 3,
          url: "https://cdn.pixabay.com/photo/2014/07/28/20/39/sunset-404072_960_720.jpg",
          alt: "Description of the image 3",
        },
        {
          id: 4,
          url: "https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115_960_720.jpg",
          alt: "Description of the image 4",
        },
        {
          id: 5,
          url: "https://cdn.pixabay.com/photo/2016/09/19/22/46/lake-1681485_960_720.jpg",
          alt: "Description of the image 5",
        },
        {
          id: 6,
          url: "https://cdn.pixabay.com/photo/2018/08/19/10/16/nature-3616194_960_720.jpg",
          alt: "Description of the image 6",
        },
      ],
    };
  },
  computed: {
    mainImageUrl() {
      return this.images.find((image) => image.id === this.activeImageId).url;
    },
    mainImageAlt() {
      return this.images.find((image) => image.id === this.activeImageId).alt;
    },
  },
  methods: {
    setActiveImage(id) {
      this.activeImageId = id;
    },
    showModal() {
      this.isModalShown = true;
    },
    closeModal() {
      this.isModalShown = false;
    },
  },
};
</script>

<style>
.gallery-container {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.gallery-wrapper {
  margin: 0;
  padding: 0;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 1rem;
}

.thumbnails {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.5rem;
}
</style>
