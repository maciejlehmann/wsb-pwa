<template>
  <div>
    <div class="title-search-wrapper">
      <h1>Nasa - {{ currentCollection }}</h1>
      <div>
        <input v-model="searchQuery" />
        <button type="button" @click="fetchData(searchQuery)">Szukaj</button>
      </div>
    </div>
    <div class="images-wrapper">
      <template v-for="value in dataArr">
        <template v-for="(link, index) in value.links">
          <div v-if="index === 0" class="single-img-wrapper" :key="link.href">
            <img
              :src="link.href"
              @click="nasaStore.openModal(link.href)"
            />
          </div>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useNasaStore } from "~/store/NasaStore";

export default {
  name: "nasa",
  data() {
    return {
      dataArr: [],
      searchQuery: "",
      currentCollection: "",
      nasaStore: useNasaStore(),
    };
  },
  methods: {
    async fetchData(searchQuery) {
      await axios
        .get(`https://images-api.nasa.gov/search?q=${searchQuery}`)
        .then((res) => {
          this.dataArr = res.data.collection.items;
          this.currentCollection = searchQuery;
          this.searchQuery = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.fetchData("sun");
  },
};
</script>

<style scoped>
* {
  font-family: Lato, sans-serif;
}
.images-wrapper {
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.single-img-wrapper {
  display: inline-block;
  width: 150px;
  height: 150px;
  overflow: hidden;
}

img {
  padding: 10px;
  width: 150px;
  height: 150px;
  transition: transform 0.5s ease;
}

img:hover {
  transform: scale(1.3);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

h1 {
  text-transform: uppercase;
}

.title-search-wrapper {
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
