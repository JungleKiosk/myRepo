<script>

import projectsData from "../data/data.json";
import { ref } from "vue";
import {useRouter} from "vue-router"


export default {
    name: "ProjectsView",
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
    <div class="container p-5">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="cards row m-5 p-5">
                    <h1>Projects</h1>
                    <div :to="`/project/${project.id}`" class="col-lg-4 col-md-4 col-sm-6 mb-4"
                    v-for="project in projects"
                    :key="project.id"
                    @click="router.push(`/project/${project.id}`)" >

                        <div class="card">
                            <h1>{{ project.name }}</h1>
                            <p>{{ project.price }}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>


</style>
