<script>

import { ref } from "vue";
import { useRouter } from "vue-router";

import newsData from "../data/news.js";

export default {
  name: "NewsView",
  setup() {
    const news = ref(newsData);
    const router = useRouter();
    return {
      news,
      router,
    };
  },
  methods: {
    getImagePath: function (name) {
      return new URL(`../assets/img/${name}`, import.meta.url).href;
    },
  },
};

</script>



<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div v-for="newsItem in news" :key="newsItem.id" class="col-12 col-lg-7 mb-4">
        <div class="card bg_card">
          <div class="card-header bg_card_header">
            <h1 class="card-title">{{ newsItem.title }}</h1>
          </div>
          <div class="card-body">
            <a v-if="newsItem.link" :href="newsItem.link" target="_blank">Go to link </a>
            <p class="card-text">{{ newsItem.description }}</p>
          </div>
          <img :src="getImagePath(newsItem.image)" class="" alt="News Image">
          <div class="card-footer">
            <small class="text-date">{{ newsItem.date }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  
<style scoped>
/* Stili personalizzati per le cards */

</style>