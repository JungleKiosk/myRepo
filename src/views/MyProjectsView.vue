<script>

import { ref } from "vue";
import { useRouter } from "vue-router";
import SliderView from "./SliderView.vue";

import projectsData from "../data/data_projects.json";

export default {
    name: "ProjectsView",
    components: {
        SliderView,
    },
    setup() {
        const projects = ref(projectsData);
        const router = useRouter();
        return {
            projects,
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
    <div id="my_proj" class="container p-5">
        <div class="row align-items-center justify-content-center">
            <div class="col-lg-12 text-center">
                <h1>my Projects</h1>
                <div class="row m-5 p-5 justify-content-center">

                    <div :to="`/project/${project.id}`" class="col-lg-3 col-md-4 col-sm-6" v-for="project in projects"
                        :key="project.id" @click="router.push(`/project/${project.id}`)">
                        <div class="p-2 my-2 rounded-4 d-flex align-items-center justify-content-center">
                            <h4 class="mb-0 ">{{ project.name }}</h4>
                        </div>
                    </div>

                </div>

                <SliderView :getImagePath="getImagePath" />
            </div>
        </div>
    </div>
</template>
  

  
<style scoped>
img {
    max-width: 100%;
    max-height: 150px;
}
</style>