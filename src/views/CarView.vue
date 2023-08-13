
<script setup>


import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from "vue";
import cars from "../data/data.json"

const car = ref(null)
const route = useRoute()
const {id} = route.params;

// console.log(route.params)

onBeforeMount(() => {
    car.value = cars.find( c => c.id === parseInt(id))

})


</script>


<template>
    <div id="cont" class="container p-5">
        <div class="row">
            <h1>{{ car.make }}</h1>
            <div class="col-lg-12">
                <p>Body: {{ car.body }}</p>
                <p>Price: {{ car.price }}</p>
                <p>Year: {{ car.year }}</p>




            </div>
        </div>
    </div>
</template>

<style scoped></style>
