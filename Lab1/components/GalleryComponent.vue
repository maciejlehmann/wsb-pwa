<template>
  <div class="gallery-container">
    <div class="gallery-wrapper">
      <div class="main-image">
        <img :src="mainImageUrl" :alt="mainImageAlt" />
      </div>
      <div class="thumbnails">
        <div v-for="image in images" :key="image.id" class="thumbnail">
          <ThumbnailImage
            :image-id="image.id"
            :image-url="image.url"
            :image-alt="image.alt"
            @setActiveImage="setActiveImage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThumbnailImage from "./gallery/ThumbnailImage.vue";
export default {
  components: { ThumbnailImage },
  data() {
    return {
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

.main-image img {
  width: 100%;
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

.thumbnail {
  display: inline-block;
  width: 150px;
}

.thumbnail img {
  max-width: 100%;
}

.thumbnail img:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>
