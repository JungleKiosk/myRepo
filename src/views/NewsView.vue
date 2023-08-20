
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
  <div class="container mt-5">
    <div class="row">
      <div v-for="newsItem in news" :key="newsItem.id" class="col-12 col-lg-3 mb-4">
        <div class="card">
          <img :src="getImagePath(newsItem.image)" class="card-img-top" alt="News Image">
          <div class="card-body">
            <h5 class="card-title">{{ newsItem.title }}</h5>
            <a href="">Go to link {{ newsItem.link }}</a>
            <p class="card-text">{{ newsItem.description }}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">{{ newsItem.date }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  
<style scoped>
/* Stili personalizzati per le cards */
.card {
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.25rem;
}

.card-text {
  font-size: 1rem;
}

.card-footer {
  background-color: #f8f9fa;
  border-top: none;
  text-align: right;
  padding: 0.5rem;
}

.text-muted {
  font-size: 0.8rem;
}
</style>
  