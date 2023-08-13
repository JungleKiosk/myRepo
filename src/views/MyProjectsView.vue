<script>

import carsData from "../data/data.json";
import { ref } from "vue";
import {useRouter} from "vue-router"


export default {
    name: "ProjectsView",
    setup() {
        const cars = ref(carsData);
        const router = useRouter();
        return {
            cars,
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
                    <div :to="`/car/${car.id}`" class="col-lg-4 col-md-4 col-sm-6 mb-4"
                    v-for="car in cars"
                    :key="car.id"
                    @click="router.push(`/car/${car.id}`)" >

                        <div class="card">
                            <h1>{{ car.make }}</h1>
                            <p>{{ car.price }} $</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>


</style>
