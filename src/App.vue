<script>

import {carsData} from "./data/data.js"

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
    <div class="container p-5">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h1>Cars</h1>
                <div class="cards">
                    <div v-for="car in carsData" :key="car.id" class="card">

                        <h1>{{ car.make }}</h1>
                        <p>{{ car.price }} $</p>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
