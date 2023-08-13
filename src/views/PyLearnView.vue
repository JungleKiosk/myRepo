<script>

import projectsData from "../data/data_py.json";
import { ref } from "vue";
import { useRouter } from "vue-router"


export default {
    name: "PyLearnView",
    setup() {
        const projects = ref(projectsData);
        const router = useRouter();
        return {
            projects,
            router
        };
    }
};

</script>


<template>
    <div id="my_proj" class="container p-5">
        <div class="row align-items-center justify-content-center">
            <div class="col-lg-12 text-center">
                <h1>py Learn</h1>

                <div class="cards row m-5 p-5 justify-content-center">
                    <div :to="`/project/${project.id}`" class="col-lg-3 col-md-4 col-sm-6" v-for="project in projects"
                        :key="project.id" @click="router.push(`/project/${project.id}`)">

                        <div class="card p-2 my-2 rounded-4 d-flex align-items-center justify-content-center">
                            <h4 class="mb-0 ">{{ project.name }}</h4>
                            <img :src="project.image" alt="Project Image" class=" my-3 rounded-2">
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
