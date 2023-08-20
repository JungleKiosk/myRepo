<script setup>

import { RouterView, RouterLink } from "vue-router"


</script>

<template>
    <nav>
        <div class="container-fluid my-4 px-5">
            <div class="row">
                <div class="col-12 col-lg-12">


                    <div class="links">
                        <!-- use <RouterLink></RouterLink> instead <a></a> to save for each pagand not refreshe -->
                        <RouterLink active-class=" active" class="page_link p-2 rounded-pill" to="/">Home</RouterLink>
                        <RouterLink active-class=" active" class="page_link p-2 rounded-pill" to="/about">About</RouterLink>
                        <RouterLink active-class=" active" class="page_link p-2 rounded-pill" to="/projects">Projects</RouterLink>
                        <RouterLink active-class=" active" class="page_link p-2 rounded-pill" to="/pylearn">pyLearn</RouterLink>
                        <RouterLink active-class=" active" class="page_link p-2 rounded-pill" to="/news">News</RouterLink>

                    </div>

                </div>

            </div>


            <RouterView />


        </div>
    </nav>
</template>

<style scoped>
.page_link {
    color: #44bc84;
    text-decoration: none;
    font-size: larger;
    font-weight: bold;
}

.active {
    background-color: #44bc84;
    color: #010e16;
}
</style>


