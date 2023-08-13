
<script setup>


import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from "vue";
import cars from "../data/data.json"

const car = ref(null)
const route = useRoute()
const { id } = route.params;

// console.log(route.params)

onBeforeMount(() => {
    car.value = cars.find(c => c.id === parseInt(id))

})


</script>


<template>
    <div class="container p-5">
        <div class="row">
            <h1>{{ car.name }}</h1>
            <div class="col-lg-6">
                <div class="col-lg-12" v-if="car">
                    <p>environment: {{ car.environment }}</p>
                    <p>stack: {{ car.stack }}</p>
                    <p>data: {{ car.data }}</p>
                </div>
                <div v-else>
                    <h1>Not Found</h1>
                </div>

            </div>

            <div class="col-lg-6">
                <p> {{ car.desc }}</p>
            </div>


        </div>
    </div>
</template>

<style scoped></style>
