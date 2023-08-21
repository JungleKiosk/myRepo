<script setup>


import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from "vue";
import projects from "../data/data_projects.json"

const project = ref(null)
const route = useRoute()
const { id } = route.params;

// console.log(route.params)

onBeforeMount(() => {
    project.value = projects.find(c => c.id === parseInt(id))

})


</script>



<template>
    <div class="container p-5">
        <div class="row">
            <h1 class="txt_title_proj">{{ project.name }}</h1>
            <div class="col-lg-6 align-items-center">
                <div class="col-lg-12" v-if="project">
                    <br>
                    <h4>Start Date:</h4>
                    <h2>{{ project.data }}</h2>
                    <button class="my-3 btn btn_btlink_proj pulse-heart">
                        <a class="link_proj" v-if="project.link" :href="project.link" target="_blank">Go to project</a>
                    </button>
                </div>
                <div v-else>
                    <h1>Not Found</h1>
                </div>
            </div>

            <div class="col-lg-6" v-if="project">
                <p class="txt_desc"> {{ project.desc }}</p>



            </div>
            <div v-else>
                <h1>Not Found</h1>
            </div>


        </div>


    </div>
</template>





<style scoped>
.txt_title_proj {
    color: #44bc84;
    font-size: 80px;
}

.txt_desc {
    font-size: 30px;
}

.btn_btlink_proj{
    background-color: #44bc84;
}
.link_proj {
    color:#010e16;
    font-weight: 900;
    text-decoration: none;
}

.pulse-heart {
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
}
</style>
