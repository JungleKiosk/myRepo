<script>

import { carsData } from "../data/data.js"

export default {
    name: "App",
    data() {
        return {
            carsData
        }
    }
}


</script>

<template>
    <div id="cont" class="container p-5">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="cards row m-5 p-5">
                    <h1>Cars</h1>
                    <div class="col-lg-4 col-md-4 col-sm-6 mb-4" v-for="car in carsData" :key="car.id">
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
