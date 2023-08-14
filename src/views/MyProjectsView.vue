<script>

import projectsData from "../data/data_projects.json";
import { ref } from "vue";
import { useRouter } from "vue-router"
import { imgProj } from "../data/img_proj.js"

export default {
    name: "ProjectsView",
    setup() {
        const projects = ref(projectsData);
        const router = useRouter();
        return {
            projects,
            router,
            imgProj
        };
    },
    methods: {
        getImagePath: function (name) {
            return new URL(`../assets/img/${name}`, import.meta.url).href
        }
    }
};

</script>




<template>
    <div id="my_proj" class="container p-5">
        <div class="row align-items-center justify-content-center">
            <div class="col-lg-12 text-center">
                <h1>my Projects</h1>
                <div class="cards row m-5 p-5 justify-content-center">
                    <div :to="`/project/${project.id}`" class="col-lg-3 col-md-4 col-sm-6" v-for="project in projects"
                        :key="project.id" @click="router.push(`/project/${project.id}`)">

                        <div class="card p-2 my-2 rounded-4 d-flex align-items-center justify-content-center">
                            <h4 class="mb-0 ">{{ project.name }}</h4>
                            <!--        <img :src="project.image" alt="Project Image" class=" my-3 rounded-2"> -->
                            <div class="text-center p-2" v-for="imgproj in imgProj" :key="imgproj.img">
                                <a :href="imgproj.link" target="_blank">
                                    <img class="rounded-4" :src="getImagePath(imgproj.img)" alt="Goal Image">
                                </a>

                            </div>

                        </div>

                    </div>
                </div>
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
