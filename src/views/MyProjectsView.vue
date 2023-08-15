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
                <h1 class="txt_title">my Projects</h1>

                <p class="txt_proj">
                    Click on a project, go to the summary sheet and view the project via the link
                </p>

                <div class="row py-5 justify-content-center">
                    <div :to="`/project/${project.id}`" class="col-lg-3 col-md-4 col-sm-6" v-for="project in projects"
                        :key="project.id" @click="router.push(`/project/${project.id}`)">
                        <div class="project-card p-2 my-2 rounded-4 d-flex align-items-center justify-content-center">
                            <h4 class="mb-0">{{ project.name }}</h4>
                        </div>
                    </div>
                </div>

                <SliderView :getImagePath="getImagePath" />
            </div>
        </div>
    </div>
</template>
  
<style scoped>

.txt_title {
    color: #ff6518;
    font-size: 80px;
}

.txt_proj{
    font-size: 30px;
}

.project-card {
    transition: transform 0.3s;
    color: #ff6518;
}

.project-card:hover {
    transform: scale(1.2);
    color: #edf3f5;
}
</style>
  