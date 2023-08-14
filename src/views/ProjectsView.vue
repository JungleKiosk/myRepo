
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
            <h1>{{ project.name }}</h1>
            <div class="col-lg-6 align-items-center">
                <div class="col-lg-12" v-if="project">
                    <br>
                    <h3>Environment: </h3>
                    <p>{{ project.environment }}</p>
                    <br>
                    <h3>Stack:</h3>
                    <p> {{ project.stack }}</p>
                    <br>
                    <h3>Start date:</h3>
                    <p>{{ project.data }}</p>
                </div>
                <div v-else>
                    <h1>Not Found</h1>
                </div>
            </div>

            <div class="col-lg-6" v-if="project">
                <p> {{ project.desc }}</p>
                <a v-if="project.link" :href="project.link" target="_blank">Go to project</a>

            </div>
            <div v-else>
                <h1>Not Found</h1>
            </div>


        </div>


    </div>
</template>





<style scoped></style>
